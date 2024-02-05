function ModalTextPass(props: any) {
    return (
      <p
        style={{
          fontFamily: "arial",
          fontSize: "14px",
          fontWeight: "100",
          padding: "8px 0",
          display: "flex",
          justifyContent: "flex-end",
          margin: 0,
          cursor: 'pointer'
        }}
      >
        {props.name}
      </p>
    );
  }
  
  export default ModalTextPass;
  