  {
    path: '/learning-center/surfviving',
    element: <Surfviving />
  },
  { path: '/learning-center/bls', element: <BLS /> },
  { path: '/learning-center/acls', element: <ACLS /> },
  {
    path: '/learning-center/wilderness',
    element: <Wilderness />
  },

  { path: '/workshops', element: <Workshops /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },

  // Expedition Visuals
  { path: '/visuals', element: <ExpeditionVisuals /> },
  {
    path: '/visuals/amsterdam',
    element: <AmsterdamVisual />
  },
  {
    path: '/visuals/barcelona',
    element: <BarcelonaVisual />
  },
  {
    path: '/visuals/wildlife',
    element: <WildlifeVisuals />
  },
  {
    path: '/visuals/washington-state',
    element: <WashingtonStateVisual />
  },
  {
    path: '/visuals/red-rocks-colorado',
    element: <RedRocksVisual />
  },
  {
    path: '/visuals/basel',
    element: <BaselVisual />
  },

  // Global Expedition Network
  { path: '/network', element: <Network /> }
];

// ==========================================
// MAIN APP
// ==========================================

export default function App() {
  return (
    <>
      <SEO />
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          {pageRoutes.map(({ path, element }) => (
            <React.Fragment key={path}>
              <Route path={path} element={element} />
              <Route
                path={path === '/' ? '/es' : `/es${path}`}
                element={element}
              />
            </React.Fragment>
          ))}

          <Route
            path='/resources'
            element={
              <Navigate
                to='/learning-center'
                replace
              />
            }
          />

          <Route
            path='/es/resources'
            element={
              <Navigate
                to='/es/learning-center'
                replace
              />
            }
          />

          <Route
            path='/expeditions'
            element={
              <Navigate
                to='/visuals'
                replace
              />
            }
          />

          <Route
            path='/es/expeditions'
            element={
              <Navigate
                to='/es/visuals'
                replace
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}
