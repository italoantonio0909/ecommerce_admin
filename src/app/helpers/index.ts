import Swal from 'sweetalert2';

export const getUrl = function (): string {
  return "http://localhost:3000"
}

export const AlertMessage = function (title: string) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 6000,
    background: "#3c4b64",
    color: "rgba(255, 255, 255, 0.6)",
    timerProgressBar: true,
    titleText: "",
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: 'success',
    title: title
  })

}