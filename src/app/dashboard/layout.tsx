import { ThemeProvider } from "next-themes";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider>
      <div className="">{children}</div>
  </ThemeProvider>
);

DashboardLayout.displayName = 'DashboardLayout';
export default DashboardLayout;
