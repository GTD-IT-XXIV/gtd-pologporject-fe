import AOS from "aos";
import "aos/dist/aos.css";
export default function Scripts() {
  AOS.init();
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather&family=Poppins:wght@200;300&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Poppins:wght@100;200;300&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Poppins:wght@100&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        rel="stylesheet"
      ></link>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </>
  );
}
