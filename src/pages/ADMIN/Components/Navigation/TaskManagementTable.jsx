import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
} from '@material-ui/core';
import { PieChart, Pie, BarChart, Bar, Cell, ResponsiveContainer, Tooltip, XAxis } from 'recharts'; // Importing Recharts components
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
  },
  timelinePaper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    borderRadius: '8px',
  },
  timelineDot: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  barChartContainer: {
    position: 'absolute',
    top: '110%',
    left: '30%',
    transform: 'translateY(-50%)',
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [courseCount, setCourseCount] = useState(0);
  const [institutionCount, setInstitutionCount] = useState(0);
  const [StudentCount, setStudentCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch course count
        const courseResponse = await axios.get('http://localhost:2020/api/institutes/count/courses');
        console.log(courseResponse);
        setCourseCount(courseResponse.data);

        // Fetch institution count
        const institutionResponse = await axios.get('http://localhost:2020/api/institutes/count/colleges');
        setInstitutionCount(institutionResponse.data);
        const StudentResponse = await axios.get('http://localhost:2020/api/users/countStudents');
        setStudentCount(StudentResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Sample data for charts
  const pieChartData = [
    { name: 'Courses', value: courseCount },
    { name: 'Colleges', value: institutionCount },
    { name: 'Students', value: StudentCount },
  ];

  const timelineData = [
    { stage: 'Review pending applications ', date: '2022-03-01', color: '#FFA726' },
    { stage: 'Schedule interviews for shortlisted candidates', date: '2022-03-10', color: '#66BB6A' },
    { stage: 'Send admission decisions to applicants', date: '2022-03-15', color: '#29B6F6' },
  ];

  const barChartData = [
    { name: 'Applications', value: 50 },
    { name: 'Queries', value: 10 },
  ];
  const barChartDataNew = [
    { name: 'Completed', value: 2 },
    { name: 'Not Completed', value: 1 },
  ];

  // State for managing user queries
  const [reply, setReply] = useState('');
  const [queries, setQueries] = useState([
    { id: 1, query: 'How can I apply for a course?', reply: '' },
    { id: 2, query: 'Is there any scholarship available?', reply: '' },
    // Add more queries as needed
  ]);
  const admissionsStatusData = {
    admitted: 150,
    pending: 30,
    admissionRate: 70, // percentage
  };
  const demographicStatisticsData = {
    Male: 150,
    Female: 30,// percentage
  };
  const renderTimelineItems = () => {
    return timelineData.map((item, index) => (
      <TimelineItem key={index}>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: item.color }} className={classes.timelineDot} />
          {index !== timelineData.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.timelinePaper}>
            <Typography variant="subtitle1" gutterBottom>
              {item.stage}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {item.date}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    ));
  };
  

  // const demographicStatisticsData = {
  //   genderDistribution: [
  //     { gender: 'Male', count: 60 },
  //     { gender: 'Female', count: 70 },
  //   ],
  // };

  const handleReply = (id) => {
    const updatedQueries = queries.map((q) =>
      q.id === id ? { ...q, reply } : q
    );
    setQueries(updatedQueries);
    setReply('');
  };

  const handleItemClick = (itemName) => {
    console.log(`Clicked on ${itemName}`);
    
    // Implement logic for handling item click
  };

  return (
    <div className={classes.root}>
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Container maxWidth="lg" className={classes.content}>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper} onClick={() => handleItemClick('Courses')}>
              <Typography variant="h6" gutterBottom>
                Courses
              </Typography>
              <Typography variant="h4">{courseCount}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper} onClick={() => handleItemClick('Institutions')}>
              <Typography variant="h6" gutterBottom>
                Institutions
              </Typography>
              <Typography variant="h4">{institutionCount}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper} onClick={() => handleItemClick('Students')}>
              <Typography variant="h6" gutterBottom>
                Students
              </Typography>
              <Typography variant="h4">{StudentCount}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper} onClick={() => handleItemClick('Report')}>
              <Typography variant="h6" gutterBottom>
                Report
              </Typography>
              <Typography variant="h4">4.5</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Pie Chart</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={pieChartData}
                    label
                    fill="#8884d8"
                    labelLine={false}
                    outerRadius={80}
                    innerRadius={40}
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Bar Graph</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barChartData}>
                  <Bar dataKey="value" fill="#8884d8">
                    <Cell fill="#8884d8" />
                    <Cell fill="#82ca9d" />
                  </Bar>
                  <XAxis dataKey="name" />
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          {/* Other sections for statistics */}

           {/* Admissions Status */}
           <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Admissions Status</Typography>
              <Typography variant="body1">Admitted: {admissionsStatusData.admitted}</Typography>
              <Typography variant="body1">Pending: {admissionsStatusData.pending}</Typography>
              <Typography variant="body1">Admission Rate: {admissionsStatusData.admissionRate}%</Typography>
            </Paper>
          </Grid>
           <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Demographic Statistics</Typography>
              <Typography variant="body1">Gender Distribution: </Typography>
              <Typography variant="body1">Male: {demographicStatisticsData.Male}</Typography>
              <Typography variant="body1">Female: {demographicStatisticsData.Female}%</Typography>
            </Paper>
          </Grid>
          <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h6" gutterBottom>
                TODO LIST
              </Typography>
              <Timeline align="left">{renderTimelineItems()}</Timeline>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.barChartContainer}>
            <Typography variant="h6">Task Completion</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barChartDataNew}>
                <Bar dataKey="value" fill="#8884d8">
                  <Cell fill="#82ca9d" />
                  <Cell fill="#FF7043" />
                </Bar>
                <XAxis dataKey="name" />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Container,
//   Grid,
//   Paper,
//   TextField,
//   Button,
// } from '@material-ui/core';
// import { PieChart, Pie, BarChart, Bar, Cell, ResponsiveContainer, Tooltip, XAxis } from 'recharts'; // Importing Recharts components
// import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     cursor: 'pointer',
//   },
//   timelinePaper: {
//     padding: theme.spacing(2),
//     textAlign: 'left',
//     color: theme.palette.text.secondary,
//     boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
//     borderRadius: '8px',
//   },
//   timelineDot: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.secondary.main,
//   },
//   barChartContainer: {
//     position: 'absolute',
//     top: '110%',
//     left: '30%',
//     transform: 'translateY(-50%)',
//   },
// }));

// const Dashboard = () => {
//   const classes = useStyles();

//   // Sample data for charts
//   const pieChartData = [
//     { name: 'Courses', value: 4 },
//     { name: 'Colleges', value: 8 },
//     { name: 'Students', value: 120 },
//   ];

//   const timelineData = [
//     { stage: 'Review pending applications ', date: '2022-03-01', color: '#FFA726' },
//     { stage: 'Schedule interviews for shortlisted candidates', date: '2022-03-10', color: '#66BB6A' },
//     { stage: 'Send admission decisions to applicants', date: '2022-03-15', color: '#29B6F6' },
//   ];

//   const barChartData = [
//     { name: 'Applications', value: 50 },
//     { name: 'Queries', value: 10 },
//   ];
//   const barChartDataNew = [
//     { name: 'Completed', value: 2 },
//     { name: 'Not Completed', value: 1 },
//   ];

//   // State for managing user queries
//   const [reply, setReply] = useState('');
//   const [queries, setQueries] = useState([
//     { id: 1, query: 'How can I apply for a course?', reply: '' },
//     { id: 2, query: 'Is there any scholarship available?', reply: '' },
//     // Add more queries as needed
//   ]);
//   const admissionsStatusData = {
//     admitted: 150,
//     pending: 30,
//     admissionRate: 70, // percentage
//   };
//   const demographicStatisticsData = {
//     Male: 150,
//     Female: 30,// percentage
//   };
//   const renderTimelineItems = () => {
//     return timelineData.map((item, index) => (
//       <TimelineItem key={index}>
//         <TimelineSeparator>
//           <TimelineDot style={{ backgroundColor: item.color }} className={classes.timelineDot} />
//           {index !== timelineData.length - 1 && <TimelineConnector />}
//         </TimelineSeparator>
//         <TimelineContent>
//           <Paper elevation={3} className={classes.timelinePaper}>
//             <Typography variant="subtitle1" gutterBottom>
//               {item.stage}
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               {item.date}
//             </Typography>
//           </Paper>
//         </TimelineContent>
//       </TimelineItem>
//     ));
//   };
  

//   // const demographicStatisticsData = {
//   //   genderDistribution: [
//   //     { gender: 'Male', count: 60 },
//   //     { gender: 'Female', count: 70 },
//   //   ],
//   // };

//   const handleReply = (id) => {
//     const updatedQueries = queries.map((q) =>
//       q.id === id ? { ...q, reply } : q
//     );
//     setQueries(updatedQueries);
//     setReply('');
//   };

//   const handleItemClick = (itemName) => {
//     console.log(`Clicked on ${itemName}`);
//     // Implement logic for handling item click
//   };

//   return (
//     <div className={classes.root}>
//       {/* <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <Typography variant="h6" noWrap>
//             Admin Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar> */}
//       <Container maxWidth="lg" className={classes.content}>
//       <Grid container spacing={3}>
//           <Grid item xs={12} sm={6} md={3}>
//             <Paper className={classes.paper} onClick={() => handleItemClick('Courses')}>
//               <Typography variant="h6" gutterBottom>
//                 Courses
//               </Typography>
//               <Typography variant="h4">500</Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Paper className={classes.paper} onClick={() => handleItemClick('Institutions')}>
//               <Typography variant="h6" gutterBottom>
//                 Institutions
//               </Typography>
//               <Typography variant="h4">200</Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Paper className={classes.paper} onClick={() => handleItemClick('Students')}>
//               <Typography variant="h6" gutterBottom>
//                 Students
//               </Typography>
//               <Typography variant="h4">$5000</Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Paper className={classes.paper} onClick={() => handleItemClick('Report')}>
//               <Typography variant="h6" gutterBottom>
//                 Report
//               </Typography>
//               <Typography variant="h4">4.5</Typography>
//             </Paper>
//           </Grid>
//         </Grid>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6}>
//             <Paper className={classes.paper}>
//               <Typography variant="h6">Pie Chart</Typography>
//               <ResponsiveContainer width="100%" height={300}>
//                 <PieChart>
//                   <Pie
//                     dataKey="value"
//                     data={pieChartData}
//                     label
//                     fill="#8884d8"
//                     labelLine={false}
//                     outerRadius={80}
//                     innerRadius={40}
//                   >
//                     {pieChartData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                 </PieChart>
//               </ResponsiveContainer>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Paper className={classes.paper}>
//               <Typography variant="h6">Bar Graph</Typography>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={barChartData}>
//                   <Bar dataKey="value" fill="#8884d8">
//                     <Cell fill="#8884d8" />
//                     <Cell fill="#82ca9d" />
//                   </Bar>
//                   <XAxis dataKey="name" />
//                   <Tooltip />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Paper>
//           </Grid>
//           {/* Other sections for statistics */}

//            {/* Admissions Status */}
//            <Grid item xs={12} sm={6}>
//             <Paper className={classes.paper}>
//               <Typography variant="h6">Admissions Status</Typography>
//               <Typography variant="body1">Admitted: {admissionsStatusData.admitted}</Typography>
//               <Typography variant="body1">Pending: {admissionsStatusData.pending}</Typography>
//               <Typography variant="body1">Admission Rate: {admissionsStatusData.admissionRate}%</Typography>
//             </Paper>
//           </Grid>
//            <Grid item xs={12} sm={6}>
//             <Paper className={classes.paper}>
//               <Typography variant="h6">Demographic Statistics</Typography>
//               <Typography variant="body1">Gender Distribution: </Typography>
//               <Typography variant="body1">Male: {demographicStatisticsData.Male}</Typography>
//               <Typography variant="body1">Female: {demographicStatisticsData.Female}%</Typography>
//             </Paper>
//           </Grid>
//           <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <Paper className={classes.paper}>
//               <Typography variant="h6" gutterBottom>
//                 TODO LIST
//               </Typography>
//               <Timeline align="left">{renderTimelineItems()}</Timeline>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3} className={classes.barChartContainer}>
//             <Typography variant="h6">Task Completion</Typography>
//             <ResponsiveContainer width="100%" height={200}>
//               <BarChart data={barChartDataNew}>
//                 <Bar dataKey="value" fill="#8884d8">
//                   <Cell fill="#82ca9d" />
//                   <Cell fill="#FF7043" />
//                 </Bar>
//                 <XAxis dataKey="name" />
//                 <Tooltip />
//               </BarChart>
//             </ResponsiveContainer>
//           </Grid>
//         </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default Dashboard;