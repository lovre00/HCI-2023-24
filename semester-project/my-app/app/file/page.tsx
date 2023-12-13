import CollapsiblePanel from "@/components/Panel";
import Navbar from "@/components/Navbar";
import ExcaliburComponent from "@/components/Logo";
import VerdictPanel from "@/components/VerdictPanel";
import Table from "@/components/Table";

const About = () => {
    const jsonData = {
        "pe_header": {
            "machine": "Intel i386",
            "timedatestamp": "Fri Oct 28 15:35:14 2022",
            "numberofsections": 3,
            "pointertosymboltable": "00019e00",
            "numberofsymbols": 1242,
            "sizeofoptionalheader": "000000e0",
            "characteristics": [
                "relocations_stripped",
                "executable_image",
                "line_nums_stripped",
                "bytes_reversed"
            ],
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
            "subsystem": {
                "type": "Windows CUI",
                "description": "Windows character-mode user interface."
            },
            "sizeofstackreserve": "00200000",
            "sizeofstackcommit": "00001000",
            "sizeofheapreserve": "00100000",
            "sizeofheapcommit": "00001000",
            "numberofrvaandsizes": "00000010",
            "sections": {
                "UPX0": {
                    "sizeofrawdata": "00000000",
                    "pointertorawdata": "00000200",
                    "virtualsize": "0001d000",
                    "virtualaddress": "00001000",
                    "execute": 1,
                    "read": 1,
                    "write": 1
                },
                "UPX1": {
                    "sizeofrawdata": "00007200",
                    "pointertorawdata": "00000200",
                    "virtualsize": "00008000",
                    "virtualaddress": "0001e000",
                    "execute": 1,
                    "read": 1,
                    "write": 1
                },
                "UPX2": {
                    "sizeofrawdata": "00000200",
                    "pointertorawdata": "00007400",
                    "virtualsize": "00001000",
                    "virtualaddress": "00026000",
                    "execute": 0,
                    "read": 1,
                    "write": 1
                }
            },
            "overlay": {
                "pe_size": 30208,
                "disk_size": 58285,
                "detected": 1
            },
            "imports": {
                "KERNEL32.DLL": [
                    "LoadLibraryA",
                    "ExitProcess",
                    "GetProcAddress",
                    "VirtualProtect"
                ],
                "msvcrt.dll": [
                    "_iob"
                ]
            }
        },
        "average_entropy_per_section": {
            "UPX0": 6.969501131095436,
            "UPX1": 7.354641716379226,
            "UPX2": 4.133989302174741
        },
        "average_overlay_entropy": 2.8780452662090794,
        "signatures": {
            "upx": "packer"
        },
        "malapi_import_check": {
            "LoadLibraryA": {
                "description": "LoadLibraryA is used to load a specified module into the address space of the calling process. Malware commonly use this to load DLLs dynamically for evasion purposes.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "GetProcAddress": {
                "description": "GetProcAddress is used to get the memory address of a function in a DLL. This is often used by malware for obfuscation and evasion purposes to avoid having to call the function directly.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "VirtualProtect": {
                "description": "VirtualProtect is often used by malware to modify memory protection (often to allow write or execution).",
                "info": "Injection",
                "library": "Kernel32.dll"
            }
        },
        "upx_custom_scan: ": {
            "algorithm": "NRV2B_LE32",
            "version": "4.02",
            "strength": "best",
            "characteristic_sections": [
                "UPX0",
                "UPX1",
                "UPX2"
            ]
        }
    };

    const headerInfo = {
        Machine: jsonData.pe_header.machine,
        TimeDateStamp: jsonData.pe_header.timedatestamp,
        NumberOfSections: jsonData.pe_header.numberofsections,
        SizeOfOptionalheader: jsonData.pe_header.sizeofoptionalheader,
        Magic: jsonData.pe_header.magic,
        MajorLinkerVersion: jsonData.pe_header.majorlinkerversion,
        MinorLinkerVersion: jsonData.pe_header.minorlinkerversion,
        SizeOfCode: jsonData.pe_header.sizeofcode,
        SizeOfInitializedData: jsonData.pe_header.sizeofinitializeddata,
        SizeOfUninitializedData: jsonData.pe_header.sizeofuninitializeddata,
        EntryPoint: jsonData.pe_header.entrypoint,
        BaseOfCode: jsonData.pe_header.baseofcode,
        ImageBase: jsonData.pe_header.imagebase,
        SectionAlignment: jsonData.pe_header.sectionalignment,
        FileAlignment: jsonData.pe_header.filealignment,
        MajorOperatingSystemVersion: jsonData.pe_header.majoroperatingsystemversion,
        MinorOperatingSystemVersion: jsonData.pe_header.minoroperatingsystemversion,
        MajorImageVersion: jsonData.pe_header.majorimageversion,
        MinorImageVersion: jsonData.pe_header.minorimageversion,
        Checksum: jsonData.pe_header.checksum,
        MajorSubsystemVersion: jsonData.pe_header.majorsubsystemversion,
        MinorSubsystemVersion: jsonData.pe_header.minorsubsystemversion,
        SizeOfImage: jsonData.pe_header.sizeofimage,
        SizeOfHeader: jsonData.pe_header.sizeofheaders,
        Subsystem: jsonData.pe_header.subsystem.type,
        SizeOfStackReserve: jsonData.pe_header.sizeofstackreserve,
        SizeOfStackCommit: jsonData.pe_header.sizeofstackcommit,
        SizeOfHeapReserve: jsonData.pe_header.sizeofheapreserve,
        SizeOfHeapCommit: jsonData.pe_header.sizeofheapcommit,
        NumberOfRvaAndSizes: jsonData.pe_header.numberofrvaandsizes,
    }

    const sectionInfo = {
        Sections: jsonData.pe_header.sections,
    }

    const overlayInfo = {
        "File size in header": jsonData.pe_header.overlay.pe_size,
        "File size on disk": jsonData.pe_header.overlay.disk_size,
        Detected: jsonData.pe_header.overlay.detected,
    }

    const importInfo = {
        Imports: jsonData.pe_header.imports,
    }

    const entropyInfo = {
        AverageEntropyPerSection: jsonData.average_entropy_per_section,
        OverlayEntropy: jsonData.average_overlay_entropy,
    }

    const signatures = {
        Signatures: jsonData.signatures,
    }

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
            <CollapsiblePanel title="Header info" data={headerInfo} type="default"/>
            <Table title="Sections" data={jsonData.pe_header.sections} type="default"/>
            <CollapsiblePanel title="Overlay info" data={overlayInfo} type="default"/>
            <CollapsiblePanel title="Entropy info" data={jsonData.average_entropy_per_section} type="default"/>
            <CollapsiblePanel title="Signatures" data={signatures.Signatures} type="default"/>
        </div>
        </div>
      );
};

export default About;