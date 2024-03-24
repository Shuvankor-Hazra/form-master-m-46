import './App.css'
import GrandPaa from './components/GrandPaa/GrandPaa'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {

  const handleSighUpSubmit = data => {
    console.log('Sign Up Data', data);
  }

  const handleUpdateProfile = data => {
    console.log('Profile Update Data', data);
  }

  return (
    <>
      <GrandPaa></GrandPaa>
      <h1 className="text-3xl font-bold underline my-10">Form Master !</h1>
      <hr />
      <SimpleForm></SimpleForm>
      <hr />
      <StateFulForm></StateFulForm>
      <hr />
      <RefForm></RefForm>
      <hr />
      <HookForm></HookForm>
      <hr />
      <ReuseableForm
        formTitle={'Sign-Up'}
        handleSubmit={handleSighUpSubmit}
        submitBtnText={'Sign-up'}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign-up right now now now !</p>
        </div>
      </ReuseableForm>
      <hr />
      <ReuseableForm
        formTitle={'Profile-Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText={'Update'}>
        <div>
          <h2>Update Profile</h2>
          <p>Please update your profile always !</p>
        </div>
      </ReuseableForm>
      <hr />
    </>
  )
}

export default App
