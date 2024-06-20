import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MetricList } from "./metric/MetricList";
import { MetricCreate } from "./metric/MetricCreate";
import { MetricEdit } from "./metric/MetricEdit";
import { MetricShow } from "./metric/MetricShow";
import { CommitList } from "./commit/CommitList";
import { CommitCreate } from "./commit/CommitCreate";
import { CommitEdit } from "./commit/CommitEdit";
import { CommitShow } from "./commit/CommitShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Git-tuna"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Metric"
          list={MetricList}
          edit={MetricEdit}
          create={MetricCreate}
          show={MetricShow}
        />
        <Resource
          name="Commit"
          list={CommitList}
          edit={CommitEdit}
          create={CommitCreate}
          show={CommitShow}
        />
      </Admin>
    </div>
  );
};

export default App;
