import Header from "@containers/header-container/header";
import Footer from "@containers/footer-container/footer";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import HeaderMedium from "@containers/header-container/header-medium";
import FooterMedium from "@containers/footer-container/footer-medium";
import FooterSmall from "@containers/footer-container/footer-small";

const PageContainer = () => {
  const isBigScreen = useMediaQuery({ minWidth: 1401 });
  const isMediumScreen = useMediaQuery({ minWidth: 800, maxWidth: 1400 });
  const isSmallScreen = useMediaQuery({ maxWidth: 799 });
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      {isBigScreen && <Header />}
      {isMediumScreen && <HeaderMedium />}
      {isSmallScreen && <HeaderMedium />}

      <div style={{ flex: "1 0 auto" }}>
        <Outlet context={{ isBigScreen, isMediumScreen, isSmallScreen }} />
      </div>

      {isBigScreen && <Footer />}
      {isMediumScreen && <FooterMedium />}
      {isSmallScreen && <FooterSmall />}
    </div>
  );
};

export default PageContainer;
