// ======================================== >> imports <<
import { getCookie } from "../Cookie_module/cookie.js";
// ======================================== >> imports <<

// ========================================= >> Delete <<
async function DeleteData(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        token: getCookie("token") || "",
      },
    });

    // >> Check if the response status is OK (200) <<
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // >> Check if the response status is OK (200) <<

    // >> response data <<
    const data = await response.json();
    return data;
    // >> response data <<

    // >> catch error <<
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
  // >> catch error <<
}

// >> export module <<
export { DeleteData };
// >> export module <<

// ========================================= >> Delete <<

// ===================================== >> fetch Data <<
async function fetchData(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: getCookie("token") || "_",
      },
    });

    // >> Check if the response status is Not OK <<
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // >> Check if the response status is Not OK <<

    // >> response data <<
    const data = await response.json();
    return data;
    // >> response data <<

    // >> catch error <<
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
  // >> catch error <<
}

// >> export module <<
export { fetchData };
// >> export module <<

// ===================================== >> fetch Data <<

// ===================================== >> post Data <<
async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: getCookie("token") || "",
      },
      body: JSON.stringify(data),
    });

    // >> handle successs response <<
    const responseData = await response.json();
    const result = {
      status: response.status,
      data: responseData,
    };
    return result;
    // >> handle successs response <<
  } catch (error) {
    // >> handle faild response <<
    console.log(error);
    // >> handle faild response <<
  }
}

// >> export module <<
export { postData };
// >> export module <<

// ===================================== >> post Data <<

// ===================================== >> post Image <<
async function postImage(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        auth: getCookie("access-token") || "",
      },
      body: data,
    });

    // >> handle successs response <<
    const responseData = await response.json();
    const result = {
      status: response.status,
      data: responseData,
    };
    return result;
    // >> handle successs response <<
  } catch (error) {
    // >> handle faild response <<
    console.log(error);
    // >> handle faild response <<
  }
}

export { postImage };
// ===================================== >> post Image <<
