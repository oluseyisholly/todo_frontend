// const password = 'Oluseyi@123';
// const saltRounds = 10;

// bcrypt.hash(password, saltRounds, function(err, hash) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Hashed Password:', hash);
//   }
// });

var eventObject = {
  activity: "",
  activitytime: "",
  isDone: false,
};

const tokenObject = JSON.parse(localStorage.getItem("token"));

if (!tokenObject) {
  logOut();
}

function logOut() {
  localStorage.removeItem("token");
  window.location.href = "../pages/login.html";
}

//endpoints
const getAllEvents = async () => {
  const response = await get("/activitybyuserid");
  console.log(response);
  return response;
};

const markEventDone = async (input) => {
  const data = { isdone: true };

  console.log(data);
  try {
    const response = await update(data, `/activity/${input}`);

    console.log(response);

    await displayAllEvents();

    return true;
    //const myJson = await response.json();
  } catch (error) {
    console.log(error?.message);
    return false;
  }
};

const displayAllEvents = async () => {
  const allEvents = await getAllEvents();

  if (!Array.isArray(allEvents)) return;

  const result = allEvents.map((item) => {
    let checked = "";

    if (item?.isdone == true) {
      checked = "checked";
    }

    console.log("check", checked);

    return `<li class=${checked}>
                    <span >
                        ${item?.activity}
                        <span>${item?.activitytime}</span>
                    </span>
                    <span>
                        <span onclick="markEventDone(${item?.id})" class='add'>✅</span> 
                        <span onclick="deleteEvent(${item?.id})"  class='remove'>❌</span>
                    </span>
                </li>`;
  });

  $("ul").html(result);
};

const createEvent = async () => {
  const data = { ...eventObject };

  console.log(data);
  try {
    const response = await post(data, `/createActivity`);

    console.log(response);

    await displayAllEvents();

    //const myJson = await response.json();
  } catch (error) {
    console.log(error?.message);
  }
};

const deleteEvent = async (input) => {
  const data = { input };

  console.log(data);
  const result = await remove(`/activity/${input}`);

  console.log(result);
  //const myJson = await response.json();

  await displayAllEvents();
};

displayAllEvents();

$(document).ready(function () {
  $("#input").change(function () {
    let input = $(this).val();

    $("#inputTime").css("display", "inline");
    $(this).css("display", "none");
    //createEvent(input);
    eventObject = { ...eventObject, activity: input };
    $(this).val("");
  });

  $("#inputTime").change(function () {
    let input = $(this).val();
    $("#input").css("display", "inline");
    $(this).css("display", "none");
    eventObject = { ...eventObject, activityTime: input };

    console.log(eventObject);
    createEvent();
    $(this).val("");
  });

  $("#logout").on("click", function () {
    logOut();
  });

  // $('#input')

  // $('ul').on('click', '.remove', function() {

  //     var element =  $(this);
  //     var element2  =  $(this).parent().parent().fadeOut(200);
  //     console.log(element, element2);
  //     $(this).parent('li').fadeOut(200);
  // });

  // $('ul').on('click', '.add', function() {

  //     var element =  $(this);
  //     var element2  =  $(this).parent().parent().toggleClass('checked');

  // });
});
