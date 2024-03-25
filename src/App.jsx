import { useState } from 'react'
import './App.css'

function App() {
  const [ formData, setFormData ] = useState( {firstName:"", lastName:"", email:"", country: "", street: "", city: "", state: "", zip: "", Comments: false, Candidates: false, Offers: false, sms: "" } );

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev)=>{
      return {
        ...prev, 
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="wrapper">

      <form action="" onSubmit={submitHandler}>
        <div className="first-name-section">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id='first-name' onChange={changeHandler} value={formData.firstName} name='firstName' placeholder='Aryan'/>
        </div>

        <div className="last-name-section">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id='last-name' onChange={changeHandler} value={formData.lastName} name='lastName' placeholder='Aswal'/>
        </div>

        <div className="email-section">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' onChange={changeHandler} value={formData.email} name="email" placeholder='sample@gmail.com'/>
        </div>

        <div className="country-section">
          <label htmlFor="country">Country</label>
          <select name="country" id="country" onChange={changeHandler} value={formData.country}>
            <option disabled value="">--Select The Country--</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
          </select>
        </div>

        <div className="address-section">
          <div>
            <label htmlFor="street">Street Address</label>
            <input type="text" id='street' onChange={changeHandler} value={formData.street} name='street'placeholder='Sample Steet'/>
          </div>

          <div>
            <label htmlFor="city">City</label>
            <input type="text" id='city' onChange={changeHandler} value={formData.city} name='city' placeholder='Asansol'/>
          </div>

          <div>
            <label htmlFor="state">State / Province</label>
            <input type="text" id='state' onChange={changeHandler} value={formData.state} name='state' placeholder='West Bengal'/>
          </div>

          <div>
            <label htmlFor="zip">ZIP / Postal Code</label>
            <input type="text" id='zip' onChange={changeHandler} value={formData.zip} name='zip' placeholder='713301'/>
          </div>
        </div>

        <div className='email-notification-section'>
          <p>By Email</p>
          <div>
            <input type="checkbox" name="Comments" id="comments" checked={formData.Comments} onChange={changeHandler}/>
            <label htmlFor="comments">Comments</label>
            <p className='para'>Get notified when someones posts a comment on a posting.</p>
          </div>
          <div>
            <input type="checkbox" name="Candidates" id="candidates" checked={formData.Candidates}  onChange={changeHandler}/>
            <label htmlFor="candidates">Candidates</label>        
            <p className='para'>Get notified when a candidate applies for a job.</p>
          </div>
          <div>
            <input type="checkbox" name="Offers" id="offers" checked={formData.Offers} onChange={changeHandler} />
            <label htmlFor="offers">Offers</label>        
            <p className='para'>Get notified when a candidate accepts or rejects an offer.</p>
          </div>
        </div>

        <div className='sms-notification-section'>
          <p>Push Notifications</p>
          <p className='sms-para'>These are delivered via SMS to your mobile phone.</p>
          <div className='radio-div'>
            <input type="radio" name="sms" id="everything" value="everything" checked={formData.sms === 'everything'} onChange={changeHandler}/>
            <label htmlFor="everything">Everything</label>
          </div>
          <div className='radio-div'>
            <input type="radio" name="sms"  id="same-as-email" value="same-as-email" checked={formData.sms === 'same-as-email'} onChange={changeHandler}/>
            <label htmlFor="same-as-email">Same as email</label>
          </div>
          <div className='radio-div'>
            <input type="radio" name="sms" id="no-push-notifications" value="no-push-notifications" checked={formData.sms === 'no-push-notifications'} onChange={changeHandler}/>
            <label htmlFor="no-push-notifications">No push notifications</label>
          </div>
        </div>

        <button>Save</button>
      </form>

    </div>
  )
}

export default App
