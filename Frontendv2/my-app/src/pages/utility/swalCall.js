import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function basicCallSwal(name){

    name = name || "User"

    MySwal.fire({
        title: `<strong>Welcome ${name}!</strong>`,
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


async function addClassEventSwal(){
    const { value: formValues } = await MySwal.fire({
        title: 'Multiple inputs',
        html:`
          <label>Types:</label>
          <input id="sw1" class="swal2-input" value="Class notice">
          <br>

          <label>Title:</label>
          <input id="sw2" class="swal2-input">
          <br>

          <label>Deadline:</label>
          <input id="sw3" class="swal2-input">
          `,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('sw1').value,
            document.getElementById('sw2').value,
            document.getElementById('sw3').value
          ]
        }
    })
      
    if (formValues) {
        console.log(formValues);

        if(!formValues[0] || !formValues[1] || !formValues[2]){

            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to input all the input box!',
            })

            return;
        }
        else{
            return formValues
        }

    }

}

export { basicCallSwal, logoutErrorSwal, addClassEventSwal }