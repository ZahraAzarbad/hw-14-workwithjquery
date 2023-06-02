const url = "https://6474eff27de100807b1bf8be.mockapi.io/auth/users";

// let ajaxReq = $.ajax(url, {
//   dataType: "json",
//   timeout: 500,
// });

// ajaxReq.success(function (data, status, jqXhr) {
// console.log(data);
// })

getUsers();

function getUsers() {
  $.ajax(
    url, // request url
    {
      success: function (data, status, xhr) {
        // success callback function
        // $("p").append(data);
        // console.log(data);
        insertDataToTable(data);
      },
    }
  );
}

function generateCard(data) {
  return `<tr  data-id="${data.id}">
  <td>${data.name}</td>
  <td>${data.email}</td>

  <td onclick="handleEdit(this)">
    <i class=" cursor-pointer bi bi-pencil-square"></i>
  </td>
  <td onclick="handleRemove(this)">
    <i class="cursor-pointer bi bi-trash3"></i>
  </td>
</tr>;`;
}

function insertDataToTable(list) {
  let html = "";
  list.forEach((user) => {
    // $("#table-body").innerHtml;
    html += generateCard(user);
  });
  $("#table-body").html(html);
}

function handleEdit(e) {
  // console.log(e);
  let trEdit = e.closest("tr");
  // console.log(trEdit);
  let id = trEdit.dataset.id;

  // console.log(id);
}

function removeUser(userId) {
  $.ajax({
    url: url + `/${userId}`,
    method: "delete",

    success: function (data, status, xhr) {
      // success callback function

      console.log(data);
      getUsers();
    },
  });
}

function handleRemove(e) {
  let trEdit = e.closest("tr");
  let id = trEdit.dataset.id;
  removeUser(id);
}

$("#add-user-btn").on("click", (e) => {
  let email = prompt("Email: ");
  let username = prompt("Username: ");

  $.post({
    url: url,
    data: { email: email, name: username },
    success: function (data, status, xhr) {
      // success callback function

      console.log(data);
      getUsers();
    },
  });
});

// ajaxReq.error(function (jqXhr, textStatus, errorMessage) {
// console.log(errorMessage);
// })
