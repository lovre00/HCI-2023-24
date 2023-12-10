import CollapsiblePanel from "@/components/Panel";
import Navbar from "@/components/Navbar";
import ExcaliburComponent from "@/components/Logo";
import VerdictPanel from "@/components/VerdictPanel";

const About = () => {
    const jsonData = {
    "pe_header": {
        "machine": "Intel i386",
        "timedatestamp": "Fri Oct 28 15:35:14 2022",
        "numberofsections": 3,
        "pointertosymboltable": "00019e00",
        "numberofsymbols": 1242,
        "sizeofoptionalheader": "000000e0",
        "magic": "0000010b",
        "majorlinkerversion": "00000002",
        "minorlinkerversion": "0000001e",
        "sizeofcode": "00008000",
        "sizeofinitializeddata": "00001000",
        "sizeofuninitializeddata": "0001d000",
        "entrypoint": "00024ef0",
        "baseofcode": "0001e000",
        "imagebase": "00400000",
        "sectionalignment": "00001000",
        "filealignment": "00000200",
        "majoroperatingsystemversion": "00000004",
        "minoroperatingsystemversion": "00000000",
        "majorimageversion": "00000001",
        "minorimageversion": "00000000",
        "checksum": "00000000",
        "majorsubsystemversion": "00000004",
        "minorsubsystemversion": "00000000",
        "sizeofimage": "00027000",
        "sizeofheaders": "00000200",
    }
    };

    const dummyData = {
        verdict: 'File clean',
        comment: 'No threat markers were found.',
        suggestions: 'Analyze the report or use deep scan.',
        // Add more data as needed
    };

      return (
        <div>
        <Navbar />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ExcaliburComponent/>
            <VerdictPanel status="ok" data={dummyData}/>
            <CollapsiblePanel title="Header info" data={jsonData.pe_header} type="default"/>
        </div>
        </div>
      );
};

export default About;