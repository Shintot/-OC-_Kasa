import React from "react";
import Banner from "../components/Banner";
import EnteteApropos from "../components/EnteteApropos";
import DropmenusFiabilite from "../components/DropmenusFiabilite";
import DropmenusRespect from "../components/DropmenusRespect";
import DropmenusService from "../components/DropmenusService";
import DropmenusResponsabilite from "../components/DropmenusResponsabilite";
import ErrorBoundary from "../components/ErreurBoundary";

import Footer from "../components/Footer";

function apropos() {
    return (
      <div>
        <Banner />
        <ErrorBoundary>
          <EnteteApropos />
          <DropmenusFiabilite />
          <DropmenusRespect />
          <DropmenusService />
          <DropmenusResponsabilite />
          <Footer />
        </ErrorBoundary>
      </div>
    );
}

export default apropos ;

