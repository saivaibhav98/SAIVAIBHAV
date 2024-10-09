import React from 'react';

const MyComponent = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    },
    header: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    keyFeaturesContainer: {
      width: '80%',
      maxWidth: '800px',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    },
    keyFeature: {
      marginBottom: '10px',
    },
    footer: {
      marginTop: '20px',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.container}>
      <header>
        <h1 style={styles.header}>KL University</h1>
      </header>
      <section style={styles.keyFeaturesContainer}>
        <h2>Key Features</h2>
        <ul>
          <li style={styles.keyFeature}>
            Programs Offered: KL University provides courses in engineering, management, law, pharmacy, architecture, sciences, and humanities, among others.
          </li>
          <li style={styles.keyFeature}>
            Research and Innovation: The university places a strong emphasis on research and innovation. It has numerous research centers and promotes innovation through incubation programs.
          </li>
          <li style={styles.keyFeature}>
            Accreditation and Ranking: KL University is accredited by the National Board of Accreditation (NBA) and the National Assessment and Accreditation Council (NAAC) with an 'A+' grade. It consistently ranks among the top private universities in India.
          </li>
          <li style={styles.keyFeature}>
            Infrastructure and Campus: The university boasts a state-of-the-art campus with modern classrooms, labs, libraries, hostels, sports facilities, and centers for cultural activities.
          </li>
          <li style={styles.keyFeature}>
            Student Life: KL University offers a vibrant campus life with various student clubs, technical fests, cultural activities, and extracurricular opportunities.
          </li>
          <li style={styles.keyFeature}>
            International Collaborations: The university has collaborations with various international universities, offering exchange programs and joint research opportunities.
          </li>
        </ul>
      </section>
      <footer style={styles.footer}>
        <p>Logout</p>
      </footer>
    </div>
  );
};

export default MyComponent;
