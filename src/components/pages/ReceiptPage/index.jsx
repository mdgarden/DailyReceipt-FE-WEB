import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import html2canvas from "html2canvas";
import { ReceiptPaper, AlertModal } from "components";
import { ReactComponent as SaveIcon } from "assets/receiptPage/save_icon.svg";
import { ReactComponent as ShareIcon } from "assets/receiptPage/share_icon.svg";
import { ReactComponent as BackIcon } from "assets/receiptPage/back_icon.svg";

export function ReceiptPage() {
  const {
    state: { todos },
  } = useLocation();

  const navigate = useNavigate();
  const receiptRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [modalOn, setModalOn] = useState(false);

  function handleShare() {
    setModalOn(true);
  }

  async function handleDownload() {
    await html2canvas(document.getElementById("receipt"), {
      backgroundColor: "none",
    }).then((canvas) => {
      const aTag = document.createElement("a");
      document.body.appendChild(aTag);
      aTag.href = canvas.toDataURL("image/jpg");
      aTag.download = "my_receipt.jpg";
      aTag.click();
      document.body.removeChild(aTag);
    });
  }

  useEffect(() => {
    const ratio = window.innerHeight / 1700;
    const receiptSectionHeight = window.innerHeight * ratio;
    const receiptHeight = receiptRef.current.offsetHeight;
    if (receiptHeight > receiptSectionHeight) {
      setScale(receiptSectionHeight / receiptHeight - 0.01);
    }
  }, []);

  return (
    <Container>
      <BackIconContainer onClick={() => navigate(-1)}>
        <BackIcon />
      </BackIconContainer>
      <ReceiptContainer ref={receiptRef} scale={scale}>
        <ReceiptPaper todos={todos} />
      </ReceiptContainer>
      <IconContainer>
        <div onClick={handleShare}>
          <ShareIcon />
          <span>SHARE</span>
        </div>
        <div onClick={handleDownload}>
          <SaveIcon />
          <span>SAVE</span>
        </div>
      </IconContainer>
      {modalOn && <AlertModal onClick={() => setModalOn(false)} />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bk};
`;

const BackIconContainer = styled.div`
  width: 36px;
  margin-top: 46px;
  margin-left: 14px;
  padding: 8px;
  opacity: 50%;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 42px;
    left: 48px;
  }
`;

const ReceiptContainer = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    transform: scale(${(props) => props.scale});
  }
`;

const IconContainer = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 24px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
    margin: 4px 24px;
    cursor: pointer;
  }

  svg {
    padding: 8px;
    opacity: 40%;
  }

  span {
    font-family: "Courier Prime", monospace;
    font-size: 16px;
    color: #efefef;
  }
`;
