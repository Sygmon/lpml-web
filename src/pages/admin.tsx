import { useEffect } from "react";

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import("netlify-cms-app")).default;
      CMS.init();
    })();
    return () => {
      const cms = document.getElementById("nc-root") as HTMLElement;
      if (cms) {
        cms.remove();
      }
    };
  }, []);

  return <div />;
};

export default Admin;
