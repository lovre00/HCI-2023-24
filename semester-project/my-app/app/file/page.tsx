import CollapsiblePanel from "@/components/Panel";
import Navbar from "@/components/Navbar";
import ExcaliburComponent from "@/components/Logo";

const About = () => {
    const jsonData = {
        title: 'User Info',
        data: {
          name: 'John Doe',
          age: 30,
          email: 'john@example.com',
          imageUrl: 'https://example.com/image.jpg',
          // Add more data fields as needed
      }};
    
      return (
        <div>
        <Navbar />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ExcaliburComponent/>
            <CollapsiblePanel title="General info" data={jsonData.data}/>
            <CollapsiblePanel title="Signatures" data={jsonData.data}/>
            <CollapsiblePanel title="PE info" data={jsonData.data}/>
            <CollapsiblePanel title="Entropy info" data={jsonData.data}/>
        </div>
        </div>
      );
};

export default About;