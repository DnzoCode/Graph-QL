import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/projects'}/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/projects/:id' element={<ProjectDetails/>}/>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}
