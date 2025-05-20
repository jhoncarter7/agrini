
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Sample data
const yieldData = [
  { month: 'Jan', yield: 40 },
  { month: 'Feb', yield: 35 },
  { month: 'Mar', yield: 45 },
  { month: 'Apr', yield: 60 },
  { month: 'May', yield: 85 },
  { month: 'Jun', yield: 70 },
  { month: 'Jul', yield: 65 },
  { month: 'Aug', yield: 80 },
  { month: 'Sep', yield: 90 },
  { month: 'Oct', yield: 75 },
  { month: 'Nov', yield: 55 },
  { month: 'Dec', yield: 45 },
];

const resourceData = [
  { name: 'Water', value: 35 },
  { name: 'Fertilizer', value: 25 },
  { name: 'Labor', value: 20 },
  { name: 'Equipment', value: 20 },
];

const COLORS = ['#03A9F4', '#4CAF50', '#795548', '#FFC107'];

export function Dashboard() {
  return (
    <section id="dashboard" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Insights Dashboard</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor your farm's performance with real-time data and actionable insights.
          </p>
        </div>

        <div className="bg-card shadow-lg rounded-xl p-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-agri-green/10">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <p className="text-agri-green font-semibold mb-2">Crop Health</p>
                <h3 className="text-3xl font-bold">92%</h3>
                <p className="text-sm text-muted-foreground">Excellent condition</p>
              </CardContent>
            </Card>

            <Card className="bg-agri-blue/10">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <p className="text-agri-blue font-semibold mb-2">Water Usage</p>
                <h3 className="text-3xl font-bold">-12%</h3>
                <p className="text-sm text-muted-foreground">Below average</p>
              </CardContent>
            </Card>

            <Card className="bg-agri-brown/10">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <p className="text-agri-brown font-semibold mb-2">Yield Forecast</p>
                <h3 className="text-3xl font-bold">+8%</h3>
                <p className="text-sm text-muted-foreground">Above last season</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h4 className="text-xl font-semibold mb-4">Yearly Yield Trend</h4>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={yieldData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="yield" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Resource Allocation</h4>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={resourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {resourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button className="btn-primary rounded-full px-8">View Full Dashboard</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
