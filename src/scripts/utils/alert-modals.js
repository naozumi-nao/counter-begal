import Swal from 'sweetalert2';
import convertDate from './iso-date-converter';

class AlertModals {
  static showSuccessModal(title, message) {
    Swal.fire({
      title: `${title}`,
      text: `${message}`,
      icon: 'success',
    });
  }

  static showErrorModal(message) {
    Swal.fire({
      title: 'ERROR',
      text: `${message}`,
      icon: 'error',
    });
  }

  static showLoadingModal() {
    Swal.fire({
      title: 'Loading...',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  static showDetailModal(report) {
    Swal.fire({
      title: `${report.name}`,
      text: `${report.description} terjadi di ${report.city} pada ${convertDate(report.createdAt)}`,
      imageUrl: `${report.photoUrl}`,
      imageWidth: 325,
      imageHeight: 325,
      imageAlt: "Custom image"
    });
  }
}

export default AlertModals;
