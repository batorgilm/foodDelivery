import '@fontsource/roboto/700.css';

function NavbarMenu(props: any) {
  return (
    <h1
      style={{
        fontFamily: "roboto",
        fontSize: "14px",
        fontWeight: "700",
        color: "#000",
        padding: "8px 16px",
        margin: 0,
        cursor: 'pointer'
      }}
    >
      {props.name}
    </h1>
  );
}

export default NavbarMenu;
