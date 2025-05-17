// File: server/utils/statsUtils.js

/**
 * Utility for generating statistics and reports for the dashboard
 */
class StatsUtils {
  /**
   * Generate project statistics
   * @param {Array} projects - Array of project documents
   * @returns {Object} Project statistics
   */
  static generateProjectStats(projects) {
    const stats = {
      total: projects.length,
      byCategory: {},
      byStatus: {},
      byLocation: {},
      byYear: {},
      totalValue: 0,
      averageValue: 0,
      largestProject: null,
      smallestProject: null,
      completionRate: 0,
      trendByMonth: []
    };

    if (projects.length === 0) return stats;

    projects.forEach(project => {
      const category = project.category || 'Uncategorized';
      stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;

      const status = project.status || 'Unknown';
      stats.byStatus[status] = (stats.byStatus[status] || 0) + 1;

      const location = project.location || 'Unknown';
      stats.byLocation[location] = (stats.byLocation[location] || 0) + 1;

      const startDate = project.startDate ? new Date(project.startDate) : null;
      if (startDate) {
        const year = startDate.getFullYear().toString();
        stats.byYear[year] = (stats.byYear[year] || 0) + 1;
      }

      if (project.value) {
        const value = parseFloat(project.value);
        if (!isNaN(value)) {
          stats.totalValue += value;

          if (!stats.largestProject || value > parseFloat(stats.largestProject.value)) {
            stats.largestProject = {
              id: project._id,
              title: project.title,
              value: project.value,
              location: project.location
            };
          }

          if (!stats.smallestProject || value < parseFloat(stats.smallestProject.value)) {
            stats.smallestProject = {
              id: project._id,
              title: project.title,
              value: project.value,
              location: project.location
            };
          }
        }
      }
    });

    stats.averageValue = stats.totalValue / stats.total;
    const completedProjects = stats.byStatus['Completed'] || 0;
    stats.completionRate = (completedProjects / stats.total) * 100;

    const lastYear = new Date();
    lastYear.setMonth(lastYear.getMonth() - 11);

    for (let i = 0; i < 12; i++) {
      const month = new Date(lastYear);
      month.setMonth(month.getMonth() + i);

      const monthKey = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, '0')}`;
      const monthName = month.toLocaleString('en-KE', { month: 'short' });

      const projectsInMonth = projects.filter(project => {
        const startDate = project.startDate ? new Date(project.startDate) : null;
        if (!startDate) return false;

        const projectMonth = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}`;
        return projectMonth === monthKey;
      }).length;

      stats.trendByMonth.push({
        month: monthName,
        count: projectsInMonth
      });
    }

    return stats;
  }

  /**
   * Generate application statistics for careers
   * @param {Array} applications - Array of application documents
   * @returns {Object} Application statistics
   */
  static generateApplicationStats(applications) {
    const stats = {
      total: applications.length,
      byPosition: {},
      byStatus: {},
      byMonth: [],
      conversionRate: 0,
      averageProcessingDays: 0
    };

    if (applications.length === 0) return stats;

    let totalProcessingDays = 0;
    let processedApplications = 0;

    applications.forEach(application => {
      const position = application.position || 'Unknown';
      stats.byPosition[position] = (stats.byPosition[position] || 0) + 1;

      const status = application.status || 'Pending';
      stats.byStatus[status] = (stats.byStatus[status] || 0) + 1;

      if (application.updatedAt && application.createdAt && status !== 'Pending') {
        const created = new Date(application.createdAt);
        const updated = new Date(application.updatedAt);
        const processingTime = Math.floor((updated - created) / (1000 * 60 * 60 * 24));
        totalProcessingDays += processingTime;
        processedApplications++;
      }
    });

    if (processedApplications > 0) {
      stats.averageProcessingDays = totalProcessingDays / processedApplications;
    }

    const interviewsScheduled = stats.byStatus['Interview'] || 0;
    stats.conversionRate = (interviewsScheduled / stats.total) * 100;

    const lastSixMonths = new Date();
    lastSixMonths.setMonth(lastSixMonths.getMonth() - 5);

    for (let i = 0; i < 6; i++) {
      const month = new Date(lastSixMonths);
      month.setMonth(month.getMonth() + i);

      const monthKey = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, '0')}`;
      const monthName = month.toLocaleString('en-KE', { month: 'short' });

      const applicationsInMonth = applications.filter(application => {
        const createdAt = new Date(application.createdAt);
        const applicationMonth = `${createdAt.getFullYear()}-${String(createdAt.getMonth() + 1).padStart(2, '0')}`;
        return applicationMonth === monthKey;
      }).length;

      stats.byMonth.push({
        month: monthName,
        count: applicationsInMonth
      });
    }

    return stats;
  }

  /**
   * Generate contact form statistics
   * @param {Array} contacts - Array of contact form submissions
   * @returns {Object} Contact statistics
   */
  static generateContactStats(contacts) {
    const stats = {
      total: contacts.length,
      bySubject: {},
      byMonth: [],
      responseRate: 0,
      averageResponseTime: 0
    };

    if (contacts.length === 0) return stats;

    let totalResponseTime = 0;
    let respondedContacts = 0;

    contacts.forEach(contact => {
      let subject = 'General';
      if (contact.subject) {
        const subjectLower = contact.subject.toLowerCase();
        if (subjectLower.includes('quote') || subjectLower.includes('estimate')) {
          subject = 'Quote Request';
        } else if (subjectLower.includes('job') || subjectLower.includes('career') || subjectLower.includes('employment')) {
          subject = 'Job Inquiry';
        } else if (subjectLower.includes('project') || subjectLower.includes('work')) {
          subject = 'Project Inquiry';
        } else if (subjectLower.includes('service')) {
          subject = 'Service Inquiry';
        } else {
          subject = contact.subject.split(' ')[0];
        }
      }

      stats.bySubject[subject] = (stats.bySubject[subject] || 0) + 1;

      if (contact.createdAt && contact.respondedAt) {
        const created = new Date(contact.createdAt);
        const responded = new Date(contact.respondedAt);
        const responseTime = (responded - created) / (1000 * 60 * 60);
        totalResponseTime += responseTime;
        respondedContacts++;
      }
    });

    if (respondedContacts > 0) {
      stats.averageResponseTime = totalResponseTime / respondedContacts;
    }

    stats.responseRate = (respondedContacts / stats.total) * 100;

    const lastSixMonths = new Date();
    lastSixMonths.setMonth(lastSixMonths.getMonth() - 5);

    for (let i = 0; i < 6; i++) {
      const month = new Date(lastSixMonths);
      month.setMonth(month.getMonth() + i);

      const monthKey = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, '0')}`;
      const monthName = month.toLocaleString('en-KE', { month: 'short' });

      const contactsInMonth = contacts.filter(contact => {
        const createdAt = new Date(contact.createdAt);
        const contactMonth = `${createdAt.getFullYear()}-${String(createdAt.getMonth() + 1).padStart(2, '0')}`;
        return contactMonth === monthKey;
      }).length;

      stats.byMonth.push({
        month: monthName,
        count: contactsInMonth
      });
    }

    return stats;
  }
}

module.exports = StatsUtils;
