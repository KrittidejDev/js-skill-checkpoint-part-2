// เริ่มเขียนโค้ดตรงนี้
const getUser = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await res.json();
    const userNameOver17 = userData
      .map((e) => e.name)
      .filter((e) => e.length > 17);
    console.log(userNameOver17);
  } catch (error) {
    console.log(error);
  }
};

getUser();
