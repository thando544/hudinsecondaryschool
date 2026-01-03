    import StatCard from "../../components/ui/StatCard";

    const Dashboard = () => {
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Students" value="15000" />
            <StatCard title="Teachers" value="200" />
            <StatCard title="Awards" value="5600" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded p-6">
              Class Routine
            </div>
            <div className="bg-white rounded p-6">Course Statistics</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded p-6">Star Students</div>
            <div className="bg-white rounded p-6">Notifications</div>
          </div>
        </div>
      );
    };

    export default Dashboard;
