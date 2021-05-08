import NavBar from "components/navbar";
import BarChart from "components/barchart";
import DonnutsChart from "components/donutschart";
import Footer from "components/footer";
import DataTable from "components/datatable";
const Dashboard = () => {
    return (
        <>
        <NavBar/>
        <div className="container">
          <h1 className="text-primary py-3"> Dashboard de Vendas</h1>
          <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Todas as Vendas</h5>
              <BarChart/>
            </div>
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
              <DonnutsChart/>
            </div>
  
          </div>
  
          <div className="py-3">
            <h2 className="text primary">Vendas</h2>
          </div>
          <DataTable/>
        </div>
        <Footer/>
      </>
    );
  }
  
  export default Dashboard;