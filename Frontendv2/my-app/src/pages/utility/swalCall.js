import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function basicCallSwal(){

    MySwal.fire({
        title: <strong>Welcome!</strong>,
        html: <a href='https://paypayduckapp.com/?fbclid=IwAR3cL1ZYFjwjyjWYKvxw8SlBjyXVmuzxvDVvc3M_5Ssx_nRsynTSJF4hG-8#' target="_blank" rel="noreferrer">Our Sponsor</a>,
        icon: 'success'
    })
}

function logoutErrorSwal(){

    MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
    })
}

export { basicCallSwal, logoutErrorSwal }