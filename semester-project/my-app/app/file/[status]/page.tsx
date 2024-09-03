'use client';

import { useParams } from 'next/navigation';
import CollapsiblePanel from "@/components/Panel";
import Navbar from "@/components/Navbar";
import ExcaliburComponent from "@/components/Logo";
import VerdictPanel from "@/components/VerdictPanel";
import ClassicTable from "@/components/ClassicTable";
import EntropyGraph from "@/components/EntropyGraph";
import RenderTable from "@/components/RenderTable";
import CommentText from "@/components/CommentText";
import ImportsTable from "@/components/ImportsTable";
import CustomScanTable from "@/components/CustomScanTable";
import CustomScanPanels from '@/components/CustomScanPanels';
import { redirect } from 'next/navigation'

const Results = () => {
    let {status} = useParams();

    // Define different dummyData based on status
    let dummyData;
    if (status === 'ok') {
        dummyData = {
            verdict: 'File clean',
            comment: 'No threat markers were found.',
            suggestions: 'No further action is required.',
            status: 'ok'
        };
    } else if (status === 'warning') {
        dummyData = {
            verdict: 'Potentially suspicious',
            comment: 'Some markers indicate potential issues.',
            suggestions: 'Further analysis is recommended.',
            status: 'warning'
        };
    } else if (status === 'critical') {
        dummyData = {
            verdict: 'Malicious',
            comment: 'Multiple threat markers found.',
            suggestions: 'Immediate action is required.',
            status: 'critical'
        };
    } else {
        redirect('/404');
    }

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
                    "write": 1,
                    "average_entropy": 6.96
                },
                "UPX1": {
                    "sizeofrawdata": "00007200",
                    "pointertorawdata": "00000200",
                    "virtualsize": "00008000",
                    "virtualaddress": "0001e000",
                    "execute": 1,
                    "read": 1,
                    "write": 1,
                    "average_entropy": 7.35
                },
                "UPX2": {
                    "sizeofrawdata": "00000200",
                    "pointertorawdata": "00007400",
                    "virtualsize": "00001000",
                    "virtualaddress": "00026000",
                    "execute": 0,
                    "read": 1,
                    "write": 1,
                    "average_entropy": 4.13
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
        "entropy_blocks": [
            6.969501131095436,
            7.765328649348594,
            7.822987910836119,
            7.691413522779435,
            7.726291223748266,
            7.700288131171253,
            7.679609402770389,
            7.688107369848876,
            7.375109747681993,
            7.058858326761931,
            7.575596964362251,
            7.741051634044913,
            7.701955736026692,
            7.689536693037515,
            4.133989302174741,
            2.489485920839509,
            2.7301101588845342,
            2.7450122952765077,
            2.5838844455264347,
            3.539422104482652,
            3.502340192001215,
            2.922687689344333,
            3.354448781915441,
            3.4037438339008177,
            2.9574462868977127,
            4.132591407768606,
            4.6755165741236855,
            4.575784019209747
        ],
        "entropy_section_ranges": [
            0,
            0,
            25
        ],
        "average_entropy_per_section": {
            "UPX0": 6.969501131095436,
            "UPX1": 7.354641716379226,
            "UPX2": 4.133989302174741
        },
        "average_overlay_entropy": 2.8780452662090794,
        "signatures": {
            "upx": "packer"
        },
        "packer_info": {
            "upx": {
                text: "UPX is an advanced executable file compressor. UPX will typically reduce the file size of programs and DLLs by around 50%-70%, thus reducing disk space, network load times, download times and other distribution and storage costs. Programs and libraries compressed by UPX are completely self-contained and run exactly as before, with no runtime or memory penalty for most of the supported formats. UPX supports a number of different executable formats, including Windows programs and DLLs, macOS apps and Linux executables.",
                url: "https://upx.github.io/",
                logo: "https://i.postimg.cc/DfW9P472/image.png"
            },
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
        "upx_custom_scan": {
            "algorithm": "NRV2B_LE32",
            "version": "4.02",
            "strength": "best",
            "characteristic_sections": [
                "UPX0",
                "UPX1",
                "UPX2"
            ]
        },
        "verdict": {
            "signatures": {
                "level": "warning",
                "comment": "Packer signature detected. Packers can potentially be used to conceal malware.",
                "suspicious": [
                    "upx"
                ]
            },
            "entropy": {
                "level": "warning",
                "sections": [
                    "UPX0",
                    "UPX1"
                ],
                "comment": "File has one or more high entropy sections. This could be indicative of encrypted content."
            }
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
        Detected: (jsonData.pe_header.overlay.detected == 1) ? "Yes" : "No",
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

      return (
        <div>
        <Navbar />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ExcaliburComponent/>
            <VerdictPanel status={dummyData.status} data={dummyData}/>
            <CollapsiblePanel title="Header info" type="default" text="">
                <CustomScanPanels data={headerInfo}/>
            </CollapsiblePanel>
            <CollapsiblePanel title="Sections" type={jsonData.verdict.entropy.level} text="">
                <ClassicTable sections={jsonData.pe_header.sections} suspicious={jsonData.verdict.entropy.sections}/>
                <CommentText type={jsonData.verdict.entropy.level} text={jsonData.verdict.entropy.comment}/>
            </CollapsiblePanel>
            <CollapsiblePanel title="Entropy graph" type="default" text="">
                <EntropyGraph sections={jsonData.pe_header.sections} entropyBlocks={jsonData.entropy_blocks} entropySectionRanges={jsonData.entropy_section_ranges}/>
            </CollapsiblePanel>
            <CollapsiblePanel title="Import table" type="default" text="">
                <ImportsTable importsData={jsonData.pe_header.imports} malapiImportCheckData={jsonData.malapi_import_check}/>
            </CollapsiblePanel>
            <CollapsiblePanel title="Overlay info" type="default" text="">
                <CustomScanPanels data={overlayInfo}/>
            </CollapsiblePanel>
            <CollapsiblePanel title="Signatures" type={jsonData.verdict.signatures.level} text="">
                <CustomScanTable importsData={signatures.Signatures} malapiImportCheckData={jsonData.packer_info}/>
                <CommentText type={jsonData.verdict.signatures.level} text={jsonData.verdict.signatures.comment}/>
            </CollapsiblePanel>
            
            {jsonData.upx_custom_scan && (
                <CollapsiblePanel title="UPX custom scan" type="warning-special" text="">
                    <CustomScanPanels data={jsonData.upx_custom_scan}/>
                    <CommentText type="info" text="Additional data retrieved using custom methods."/>
                </CollapsiblePanel>
            )}
        </div>
        </div>
      );
};

export default Results;