import myImage from "./linkedin.jpg"


function Profile() {
    return(
       <>
      
       <div class="image">
        <div class="trick">

        </div>
      </div>
      <div>

      <img className='myimage' id='profile__img' src={myImage} alt="profile-pic" />

      </div>
      <ul class="text" id="twitter">@AbooTuraab</ul>
      <ul class="text" id="slack" hidden>adenijialiyuolamilekan</ul>
       </>
    );
}

export default Profile;
 