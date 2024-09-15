const MyApp = () => {
    let name = "Pankaj Kumar";
    let age = "24";
    let city = "Bangalore";
  return (
    <div>
      <h1>Learn Web Development</h1>
      <p>
        Welcome to the MDN learning area. This set of articles aims to guide
        complete beginners to web development with all that they need to start
        coding websites.
      </p>
      <p>
        The aim of this area of MDN is not to take you from "beginner" to
        "expert" but to take you from "beginner" to "comfortable." From there,
        you should be able to start making your way, learning from the <u>rest of
        MDN</u>, and other intermediate to advanced resources that assume a lot of
        previous knowledge.
      </p>
      <p>
        f you are a complete beginner, web development can be challenging - we
        will hold your hand and provide enough detail for you to feel
        comfortable and learn the topics properly. You should feel at home
        whether you are a student learning web development (on your own or as
        part of a class), a teacher looking for class materials, a hobbyist, or
        someone who just wants to understand more about how web
        technologies work.
      </p>

      <div className="details">
        <img src="" alt="" />
        <h2>Name:- {name}</h2>
        <span>Age:- {age}</span>
        <br />
        <span>City:-{city}</span>

        
      </div>
    </div>
  );
};
const rootDiv = document.getElementById("root");
const root = ReactDOM.createRoot(rootDiv);
root.render(<MyApp />);
