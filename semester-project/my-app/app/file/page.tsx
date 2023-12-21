import CollapsiblePanel from "@/components/Panel";
import Navbar from "@/components/Navbar";
import ExcaliburComponent from "@/components/Logo";
import VerdictPanel from "@/components/VerdictPanel";
import Table from "@/components/Table";
import EntropyGraph from "@/components/EntropyGraph";
import EntropyGraphPanel from "@/components/EntropyGraphPanel";

const About = () => {
    const jsonData = {
        "pe_header": {
            "machine": "AMD64",
            "timedatestamp": "Thu Jan 01 01:00:00 1970",
            "numberofsections": 12,
            "pointertosymboltable": "00000000",
            "numberofsymbols": 0,
            "sizeofoptionalheader": "000000f0",
            "characteristics": [
                "executable_image",
                "line_nums_stripped",
                "local_symbols_stripped",
                "32bit_machine"
            ],
            "magic": "0000020b",
            "majorlinkerversion": "00000002",
            "minorlinkerversion": "00000023",
            "sizeofcode": "04924600",
            "sizeofinitializeddata": "05911000",
            "sizeofuninitializeddata": "014bf000",
            "entrypoint": "000014f0",
            "baseofcode": "00001000",
            "imagebase": "00000001",
            "sectionalignment": "00001000",
            "filealignment": "00000200",
            "majoroperatingsystemversion": "00000004",
            "minoroperatingsystemversion": "00000000",
            "majorimageversion": "00000000",
            "minorimageversion": "00000000",
            "checksum": "05917991",
            "majorsubsystemversion": "00000005",
            "minorsubsystemversion": "00000002",
            "sizeofimage": "06dd7000",
            "sizeofheaders": "00001000",
            "subsystem": {
                "type": "Windows CUI",
                "description": "Windows character-mode user interface."
            },
            "sizeofstackreserve": "00200000",
            "sizeofstackcommit": "00000000",
            "sizeofheapreserve": "00001000",
            "sizeofheapcommit": "00000000",
            "numberofrvaandsizes": "00000000",
            "sections": {
                ".text": {
                    "sizeofrawdata": "0491f000",
                    "pointertorawdata": "00001000",
                    "virtualsize": "0491e030",
                    "virtualaddress": "00001000",
                    "execute": 1,
                    "read": 1,
                    "write": 0
                },
                ".rodata": {
                    "sizeofrawdata": "00005600",
                    "pointertorawdata": "04920000",
                    "virtualsize": "0000550c",
                    "virtualaddress": "04920000",
                    "execute": 1,
                    "read": 1,
                    "write": 0
                },
                ".data": {
                    "sizeofrawdata": "00115200",
                    "pointertorawdata": "04925600",
                    "virtualsize": "00115060",
                    "virtualaddress": "04926000",
                    "execute": 0,
                    "read": 1,
                    "write": 1
                },
                ".rdata": {
                    "sizeofrawdata": "00c4c800",
                    "pointertorawdata": "04a3a800",
                    "virtualsize": "00c4c650",
                    "virtualaddress": "04a3c000",
                    "execute": 0,
                    "read": 1,
                    "write": 0
                },
                ".pdata": {
                    "sizeofrawdata": "000ecc00",
                    "pointertorawdata": "05687000",
                    "virtualsize": "000eca48",
                    "virtualaddress": "05689000",
                    "execute": 0,
                    "read": 1,
                    "write": 0
                },
                ".xdata": {
                    "sizeofrawdata": "00152e00",
                    "pointertorawdata": "05773c00",
                    "virtualsize": "00152cd8",
                    "virtualaddress": "05776000",
                    "execute": 0,
                    "read": 1,
                    "write": 0
                },
                ".bss": {
                    "sizeofrawdata": "00000000",
                    "pointertorawdata": "00000000",
                    "virtualsize": "014befa0",
                    "virtualaddress": "058c9000",
                    "execute": 0,
                    "read": 1,
                    "write": 1
                },
                ".edata": {
                    "sizeofrawdata": "00002a00",
                    "pointertorawdata": "058c6a00",
                    "virtualsize": "00002849",
                    "virtualaddress": "06d88000",
                    "execute": 0,
                    "read": 1,
                    "write": 0
                },
                ".idata": {
                    "sizeofrawdata": "00007400",
                    "pointertorawdata": "058c9400",
                    "virtualsize": "00007268",
                    "virtualaddress": "06d8b000",
                    "execute": 0,
                    "read": 1,
                    "write": 1
                },
                ".CRT": {
                    "sizeofrawdata": "00000200",
                    "pointertorawdata": "058d0800",
                    "virtualsize": "000000b0",
                    "virtualaddress": "06d93000",
                    "execute": 0,
                    "read": 1,
                    "write": 1
                },
                ".tls": {
                    "sizeofrawdata": "00000200",
                    "pointertorawdata": "058d0a00",
                    "virtualsize": "00000010",
                    "virtualaddress": "06d94000",
                    "execute": 0,
                    "read": 1,
                    "write": 1
                },
                ".reloc": {
                    "sizeofrawdata": "00041400",
                    "pointertorawdata": "058d0c00",
                    "virtualsize": "00041380",
                    "virtualaddress": "06d95000",
                    "execute": 0,
                    "read": 1,
                    "write": 0
                }
            },
            "overlay": {
                "pe_size": 93396992,
                "disk_size": 93396992,
                "detected": 0
            },
            "imports": {
                "ADVAPI32.dll": [
                    "CryptAcquireContextA",
                    "CryptAcquireContextW",
                    "CryptCreateHash",
                    "CryptDecrypt",
                    "CryptDestroyHash",
                    "CryptDestroyKey",
                    "CryptEnumProvidersW",
                    "CryptExportKey",
                    "CryptGenRandom",
                    "CryptGetProvParam",
                    "CryptGetUserKey",
                    "CryptReleaseContext",
                    "CryptSetHashParam",
                    "CryptSignHashW",
                    "DeregisterEventSource",
                    "GetSidSubAuthority",
                    "GetSidSubAuthorityCount",
                    "GetTokenInformation",
                    "OpenProcessToken",
                    "RegCloseKey",
                    "RegEnumKeyExW",
                    "RegEnumValueA",
                    "RegEnumValueW",
                    "RegOpenKeyExA",
                    "RegOpenKeyExW",
                    "RegQueryInfoKeyW",
                    "RegQueryValueExA",
                    "RegQueryValueExW",
                    "RegisterEventSourceW",
                    "ReportEventW",
                    "SystemFunction036"
                ],
                "bcrypt.dll": [
                    "BCryptCloseAlgorithmProvider",
                    "BCryptGenRandom",
                    "BCryptOpenAlgorithmProvider"
                ],
                "CFGMGR32.dll": [
                    "CM_Get_Child",
                    "CM_Get_DevNode_PropertyW",
                    "CM_Get_DevNode_Registry_PropertyW",
                    "CM_Get_DevNode_Status",
                    "CM_Get_Device_IDW",
                    "CM_Get_Device_ID_ListW",
                    "CM_Get_Device_ID_List_SizeW",
                    "CM_Get_Sibling",
                    "CM_Locate_DevNodeW",
                    "CM_Open_DevNode_Key"
                ],
                "CRYPT32.dll": [
                    "CertCloseStore",
                    "CertDuplicateCertificateContext",
                    "CertEnumCertificatesInStore",
                    "CertFindCertificateInStore",
                    "CertFreeCertificateContext",
                    "CertGetCertificateContextProperty",
                    "CertOpenStore"
                ],
                "GDI32.dll": [
                    "BitBlt",
                    "ChoosePixelFormat",
                    "CombineRgn",
                    "CreateBitmap",
                    "CreateCompatibleBitmap",
                    "CreateCompatibleDC",
                    "CreateDCW",
                    "CreateDIBSection",
                    "CreateFontIndirectW",
                    "CreateFontW",
                    "CreatePen",
                    "CreateRectRgn",
                    "CreateSolidBrush",
                    "DeleteDC",
                    "DeleteObject",
                    "DescribePixelFormat",
                    "EnumFontFamiliesExW",
                    "EnumFontFamiliesW",
                    "ExtTextOutW",
                    "GetDIBColorTable",
                    "GetDIBits",
                    "GetDeviceCaps",
                    "GetDeviceGammaRamp",
                    "GetObjectA",
                    "GetPixelFormat",
                    "GetStockObject",
                    "GetTextExtentPoint32A",
                    "GetTextExtentPoint32W",
                    "GetTextFaceW",
                    "GetTextMetricsW",
                    "Rectangle",
                    "SelectObject",
                    "SetBkMode",
                    "SetDeviceGammaRamp",
                    "SetPixelFormat",
                    "SetTextColor",
                    "SwapBuffers"
                ],
                "IMM32.dll": [
                    "ImmAssociateContext",
                    "ImmGetCandidateListW",
                    "ImmGetCompositionStringW",
                    "ImmGetContext",
                    "ImmGetIMEFileNameA",
                    "ImmNotifyIME",
                    "ImmReleaseContext",
                    "ImmSetCompositionStringW",
                    "ImmSetCompositionWindow"
                ],
                "KERNEL32.dll": [
                    "AcquireSRWLockExclusive",
                    "AcquireSRWLockShared",
                    "AddVectoredExceptionHandler",
                    "CancelIo",
                    "CancelIoEx",
                    "CloseHandle",
                    "CompareStringA",
                    "ConvertFiberToThread",
                    "ConvertThreadToFiber",
                    "CopyFileExW",
                    "CreateDirectoryW",
                    "CreateEventA",
                    "CreateEventW",
                    "CreateFiber",
                    "CreateFileA",
                    "CreateFileMappingA",
                    "CreateFileW",
                    "CreateHardLinkA",
                    "CreateHardLinkW",
                    "CreateMutexA",
                    "CreateNamedPipeW",
                    "CreateProcessW",
                    "CreateSemaphoreA",
                    "CreateSemaphoreW",
                    "CreateSymbolicLinkW",
                    "CreateThread",
                    "CreateToolhelp32Snapshot",
                    "DeleteCriticalSection",
                    "DeleteFiber",
                    "DeleteFileW",
                    "DeviceIoControl",
                    "DuplicateHandle",
                    "EnterCriticalSection",
                    "ExitProcess",
                    "ExpandEnvironmentStringsA",
                    "FileTimeToSystemTime",
                    "FindClose",
                    "FindFirstFileA",
                    "FindFirstFileW",
                    "FindNextFileA",
                    "FindNextFileW",
                    "FlushFileBuffers",
                    "FormatMessageA",
                    "FormatMessageW",
                    "FreeEnvironmentStringsW",
                    "FreeLibrary",
                    "GetACP",
                    "GetActiveProcessorGroupCount",
                    "GetCommandLineW",
                    "GetComputerNameA",
                    "GetConsoleMode",
                    "GetConsoleScreenBufferInfo",
                    "GetCurrentDirectoryW",
                    "GetCurrentProcess",
                    "GetCurrentProcessId",
                    "GetCurrentThread",
                    "GetCurrentThreadId",
                    "GetEnvironmentStringsW",
                    "GetEnvironmentVariableA",
                    "GetEnvironmentVariableW",
                    "GetExitCodeProcess",
                    "GetFileAttributesExA",
                    "GetFileAttributesW",
                    "GetFileInformationByHandle",
                    "GetFileSize",
                    "GetFileSizeEx",
                    "GetFileType",
                    "GetFinalPathNameByHandleW",
                    "GetFullPathNameA",
                    "GetHandleInformation",
                    "GetLastError",
                    "GetLocaleInfoA",
                    "GetLogicalProcessorInformation",
                    "GetLongPathNameA",
                    "GetModuleFileNameA",
                    "GetModuleFileNameW",
                    "GetModuleHandleA",
                    "GetModuleHandleExA",
                    "GetModuleHandleExW",
                    "GetModuleHandleW",
                    "GetNumaHighestNodeNumber",
                    "GetNumaNodeProcessorMaskEx",
                    "GetOverlappedResult",
                    "GetProcAddress",
                    "GetProcessAffinityMask",
                    "GetProcessHeap",
                    "GetProcessId",
                    "GetProcessTimes",
                    "GetStartupInfoA",
                    "GetStdHandle",
                    "GetSystemDirectoryA",
                    "GetSystemDirectoryW",
                    "GetSystemInfo",
                    "GetSystemPowerStatus",
                    "GetSystemTimeAdjustment",
                    "GetSystemTimeAsFileTime",
                    "GetTempPathA",
                    "GetTempPathW",
                    "GetThreadContext",
                    "GetThreadGroupAffinity",
                    "GetThreadPriority",
                    "GetThreadTimes",
                    "GetTickCount",
                    "GetTimeZoneInformation",
                    "GetVersion",
                    "GetWindowsDirectoryA",
                    "GetWindowsDirectoryW",
                    "GlobalAlloc",
                    "GlobalLock",
                    "GlobalMemoryStatusEx",
                    "GlobalUnlock",
                    "HeapAlloc",
                    "HeapFree",
                    "HeapReAlloc",
                    "InitOnceBeginInitialize",
                    "InitOnceComplete",
                    "InitOnceExecuteOnce",
                    "InitializeConditionVariable",
                    "InitializeCriticalSection",
                    "InitializeCriticalSectionAndSpinCount",
                    "InitializeCriticalSectionEx",
                    "InitializeSRWLock",
                    "IsDBCSLeadByteEx",
                    "IsDebuggerPresent",
                    "IsWow64Process",
                    "LeaveCriticalSection",
                    "LoadLibraryA",
                    "LoadLibraryExA",
                    "LoadLibraryExW",
                    "LoadLibraryW",
                    "LocalFree",
                    "LockFileEx",
                    "MapViewOfFile",
                    "Module32FirstW",
                    "Module32NextW",
                    "MoveFileExA",
                    "MoveFileExW",
                    "MulDiv",
                    "MultiByteToWideChar",
                    "OpenProcess",
                    "OutputDebugStringA",
                    "OutputDebugStringW",
                    "Process32First",
                    "Process32Next",
                    "QueryPerformanceCounter",
                    "QueryPerformanceFrequency",
                    "RaiseException",
                    "ReadConsoleA",
                    "ReadConsoleW",
                    "ReadFile",
                    "ReleaseMutex",
                    "ReleaseSRWLockExclusive",
                    "ReleaseSRWLockShared",
                    "ReleaseSemaphore",
                    "RemoveDirectoryA",
                    "RemoveDirectoryW",
                    "RemoveVectoredExceptionHandler",
                    "ResetEvent",
                    "ResumeThread",
                    "RtlCaptureContext",
                    "RtlLookupFunctionEntry",
                    "RtlUnwindEx",
                    "RtlVirtualUnwind",
                    "SetConsoleMode",
                    "SetConsoleTextAttribute",
                    "SetCurrentDirectoryW",
                    "SetDllDirectoryA",
                    "SetDllDirectoryW",
                    "SetEnvironmentVariableA",
                    "SetEnvironmentVariableW",
                    "SetErrorMode",
                    "SetEvent",
                    "SetFileAttributesW",
                    "SetFileInformationByHandle",
                    "SetFilePointer",
                    "SetFilePointerEx",
                    "SetHandleInformation",
                    "SetLastError",
                    "SetProcessAffinityMask",
                    "SetSystemTime",
                    "SetThreadAffinityMask",
                    "SetThreadContext",
                    "SetThreadErrorMode",
                    "SetThreadExecutionState",
                    "SetThreadGroupAffinity",
                    "SetThreadPriority",
                    "SetThreadStackGuarantee",
                    "SetUnhandledExceptionFilter",
                    "SignalObjectAndWait",
                    "Sleep",
                    "SleepConditionVariableCS",
                    "SleepConditionVariableSRW",
                    "SuspendThread",
                    "SwitchToFiber",
                    "SwitchToThread",
                    "TerminateProcess",
                    "TlsAlloc",
                    "TlsFree",
                    "TlsGetValue",
                    "TlsSetValue",
                    "TryAcquireSRWLockExclusive",
                    "TryEnterCriticalSection",
                    "UnlockFileEx",
                    "UnmapViewOfFile",
                    "VerSetConditionMask",
                    "VerifyVersionInfoW",
                    "VirtualAlloc",
                    "VirtualFree",
                    "VirtualProtect",
                    "VirtualQuery",
                    "WaitForMultipleObjects",
                    "WaitForSingleObject",
                    "WaitForSingleObjectEx",
                    "WakeAllConditionVariable",
                    "WakeConditionVariable",
                    "WideCharToMultiByte",
                    "WriteConsoleW",
                    "WriteFile",
                    "__C_specific_handler",
                    "lstrcatW",
                    "lstrlenW"
                ],
                "MFPlat.DLL": [
                    "MFCreateAlignedMemoryBuffer",
                    "MFCreateMediaType",
                    "MFCreateSample",
                    "MFShutdown",
                    "MFStartup"
                ],
                "msvcrt.dll": [
                    "___lc_codepage_func",
                    "___mb_cur_max_func",
                    "__getmainargs",
                    "__initenv",
                    "__iob_func",
                    "__lconv_init",
                    "__set_app_type",
                    "__setusermatherr",
                    "_access",
                    "_acmdln",
                    "_aligned_free",
                    "_aligned_malloc",
                    "_aligned_realloc",
                    "_amsg_exit",
                    "_assert",
                    "_beginthread",
                    "_beginthreadex",
                    "_cexit",
                    "_commode",
                    "_endthread",
                    "_endthreadex",
                    "_errno",
                    "_exit",
                    "_filelengthi64",
                    "_fileno",
                    "_findclose",
                    "_findfirst64",
                    "_findnext64",
                    "_fmode",
                    "_fstat64",
                    "_ftime64",
                    "_ftime64_s",
                    "_get_osfhandle",
                    "_gmtime64",
                    "_hypot",
                    "_i64toa",
                    "_initterm",
                    "_itoa_s",
                    "_localtime64",
                    "_lock",
                    "_locking",
                    "_lseeki64",
                    "_ltoa",
                    "_mbsrchr",
                    "_mkdir",
                    "_mktime64",
                    "_onexit",
                    "_open",
                    "_read",
                    "_rmdir",
                    "_setjmp",
                    "_setmode",
                    "_sopen",
                    "_stat64",
                    "_strdup",
                    "_stricmp",
                    "_strlwr",
                    "_strnicmp",
                    "_strrev",
                    "_strupr",
                    "_time64",
                    "_ui64toa",
                    "_ultoa",
                    "_unlink",
                    "_unlock",
                    "_vscprintf",
                    "_vsnprintf",
                    "_vsnwprintf",
                    "_waccess",
                    "_wcsicmp",
                    "_wcsnicmp",
                    "_wfindfirst64",
                    "_wfindnext64",
                    "_wfopen",
                    "_wfopen_s",
                    "_wmkdir",
                    "_wopen",
                    "_wremove",
                    "_wrename",
                    "_wrmdir",
                    "_wsopen",
                    "_wstat64",
                    "_wunlink",
                    "abort",
                    "acos",
                    "asin",
                    "atan",
                    "atof",
                    "atoi",
                    "bsearch",
                    "calloc",
                    "clock",
                    "cosh",
                    "div",
                    "exit",
                    "fclose",
                    "feof",
                    "ferror",
                    "fflush",
                    "fgetc",
                    "fgetpos",
                    "fgets",
                    "fgetws",
                    "fopen",
                    "fprintf",
                    "fputc",
                    "fputs",
                    "fread",
                    "free",
                    "frexp",
                    "fseek",
                    "fsetpos",
                    "ftell",
                    "fwrite",
                    "getc",
                    "getchar",
                    "getenv",
                    "getwc",
                    "isalnum",
                    "isalpha",
                    "islower",
                    "isspace",
                    "isupper",
                    "iswctype",
                    "isxdigit",
                    "localeconv",
                    "log10",
                    "malloc",
                    "mbstowcs",
                    "memchr",
                    "memcmp",
                    "memcpy",
                    "memmove",
                    "memset",
                    "perror",
                    "printf",
                    "putc",
                    "putwc",
                    "qsort",
                    "raise",
                    "rand",
                    "realloc",
                    "remove",
                    "rename",
                    "rewind",
                    "setlocale",
                    "setvbuf",
                    "signal",
                    "sinh",
                    "sprintf",
                    "srand",
                    "strcat",
                    "strchr",
                    "strcmp",
                    "strcoll",
                    "strcpy",
                    "strcspn",
                    "strerror",
                    "strftime",
                    "strlen",
                    "strncmp",
                    "strncpy",
                    "strpbrk",
                    "strrchr",
                    "strspn",
                    "strstr",
                    "strtok",
                    "strtok_s",
                    "strtol",
                    "strtoul",
                    "strxfrm",
                    "swscanf_s",
                    "tan",
                    "tanh",
                    "tolower",
                    "toupper",
                    "towlower",
                    "towupper",
                    "ungetc",
                    "ungetwc",
                    "vfprintf",
                    "wcscat",
                    "wcscat_s",
                    "wcschr",
                    "wcscmp",
                    "wcscoll",
                    "wcscpy",
                    "wcscpy_s",
                    "wcscspn",
                    "wcsftime",
                    "wcslen",
                    "wcsncmp",
                    "wcsncpy",
                    "wcsrchr",
                    "wcsstr",
                    "wcstombs",
                    "wcstombs_s",
                    "wcstoul",
                    "wcsxfrm",
                    "_vsnprintf_s",
                    "longjmp",
                    "_nextafter",
                    "_write",
                    "_wcsdup",
                    "_unlink",
                    "_strdup",
                    "_setmode",
                    "_rmdir",
                    "_read",
                    "_open",
                    "_lseek",
                    "_itoa",
                    "_isatty",
                    "_getpid",
                    "_getcwd",
                    "_fileno",
                    "_fdopen",
                    "_close",
                    "_chmod",
                    "_access"
                ],
                "ole32.dll": [
                    "CoCreateInstance",
                    "CoGetMalloc",
                    "CoInitialize",
                    "CoInitializeEx",
                    "CoTaskMemAlloc",
                    "CoTaskMemFree",
                    "CoUninitialize",
                    "CreateBindCtx",
                    "OleLoadFromStream",
                    "OleSaveToStream",
                    "PropVariantClear",
                    "StringFromGUID2"
                ],
                "OLEAUT32.dll": [
                    "OleCreatePropertyFrame",
                    "SysFreeString"
                ],
                "Secur32.dll": [
                    "AcquireCredentialsHandleA",
                    "ApplyControlToken",
                    "DecryptMessage",
                    "DeleteSecurityContext",
                    "EncryptMessage",
                    "FreeContextBuffer",
                    "FreeCredentialsHandle",
                    "InitializeSecurityContextA",
                    "QueryContextAttributesA"
                ],
                "SETUPAPI.dll": [
                    "SetupDiDestroyDeviceInfoList",
                    "SetupDiEnumDeviceInfo",
                    "SetupDiEnumDeviceInterfaces",
                    "SetupDiGetClassDevsA",
                    "SetupDiGetDeviceInterfaceDetailA",
                    "SetupDiGetDeviceRegistryPropertyA"
                ],
                "SHELL32.dll": [
                    "CommandLineToArgvW",
                    "DragAcceptFiles",
                    "DragFinish",
                    "DragQueryFileW",
                    "ExtractIconExW",
                    "SHGetFolderPathW",
                    "ShellExecuteW"
                ],
                "SHLWAPI.dll": [
                    "SHCreateStreamOnFileA"
                ],
                "USER32.dll": [
                    "AdjustWindowRectEx",
                    "BeginPaint",
                    "CallWindowProcW",
                    "ChangeDisplaySettingsExW",
                    "ClientToScreen",
                    "ClipCursor",
                    "CloseClipboard",
                    "CopyIcon",
                    "CreateIconFromResource",
                    "CreateIconIndirect",
                    "CreateWindowExA",
                    "CreateWindowExW",
                    "DefWindowProcA",
                    "DefWindowProcW",
                    "DestroyCursor",
                    "DestroyIcon",
                    "DestroyWindow",
                    "DialogBoxIndirectParamW",
                    "DispatchMessageA",
                    "DispatchMessageW",
                    "DrawIcon",
                    "DrawTextW",
                    "EmptyClipboard",
                    "EndDialog",
                    "EndPaint",
                    "EnumDisplayDevicesW",
                    "EnumDisplayMonitors",
                    "EnumDisplaySettingsW",
                    "FindWindowW",
                    "FrameRect",
                    "GetAsyncKeyState",
                    "GetClassInfoExW",
                    "GetClientRect",
                    "GetClipCursor",
                    "GetClipboardData",
                    "GetClipboardSequenceNumber",
                    "GetCursorInfo",
                    "GetCursorPos",
                    "GetDC",
                    "GetDesktopWindow",
                    "GetDlgItem",
                    "GetDoubleClickTime",
                    "GetFocus",
                    "GetIconInfo",
                    "GetKeyState",
                    "GetKeyboardLayout",
                    "GetKeyboardState",
                    "GetMenu",
                    "GetMessageExtraInfo",
                    "GetMessageW",
                    "GetMonitorInfoW",
                    "GetParent",
                    "GetProcessWindowStation",
                    "GetPropW",
                    "GetRawInputData",
                    "GetRawInputDeviceInfoA",
                    "GetRawInputDeviceList",
                    "GetSystemMetrics",
                    "GetUpdateRect",
                    "GetUserObjectInformationW",
                    "GetWindowLongPtrA",
                    "GetWindowLongPtrW",
                    "GetWindowLongW",
                    "GetWindowRect",
                    "GetWindowTextLengthW",
                    "GetWindowTextW",
                    "InvalidateRect",
                    "IsClipboardFormatAvailable",
                    "IsIconic",
                    "IsRectEmpty",
                    "IsWindowVisible",
                    "KillTimer",
                    "LoadCursorA",
                    "LoadCursorW",
                    "LoadIconW",
                    "MapVirtualKeyW",
                    "MessageBoxA",
                    "MessageBoxW",
                    "OpenClipboard",
                    "PeekMessageA",
                    "PeekMessageW",
                    "PostMessageW",
                    "PostThreadMessageW",
                    "PtInRect",
                    "RegisterClassExA",
                    "RegisterClassExW",
                    "RegisterClassW",
                    "RegisterDeviceNotificationW",
                    "RegisterRawInputDevices",
                    "ReleaseDC",
                    "RemovePropW",
                    "ScreenToClient",
                    "SendMessageA",
                    "SendMessageW",
                    "SetClipboardData",
                    "SetCursor",
                    "SetCursorPos",
                    "SetFocus",
                    "SetForegroundWindow",
                    "SetLayeredWindowAttributes",
                    "SetPropW",
                    "SetTimer",
                    "SetWindowLongPtrA",
                    "SetWindowLongPtrW",
                    "SetWindowLongW",
                    "SetWindowPos",
                    "SetWindowRgn",
                    "SetWindowTextW",
                    "ShowWindow",
                    "SystemParametersInfoA",
                    "SystemParametersInfoW",
                    "ToUnicode",
                    "TrackMouseEvent",
                    "TranslateMessage",
                    "UnregisterClassA",
                    "UnregisterClassW",
                    "UnregisterDeviceNotification",
                    "ValidateRect",
                    "WindowFromPoint"
                ],
                "USERENV.dll": [
                    "GetUserProfileDirectoryW"
                ],
                "VERSION.dll": [
                    "GetFileVersionInfoA",
                    "GetFileVersionInfoSizeA",
                    "VerQueryValueA"
                ],
                "AVICAP32.dll": [
                    "capCreateCaptureWindowA",
                    "capGetDriverDescriptionA"
                ],
                "WINMM.dll": [
                    "timeBeginPeriod",
                    "timeEndPeriod",
                    "timeGetTime",
                    "waveInAddBuffer",
                    "waveInClose",
                    "waveInGetDevCapsW",
                    "waveInGetNumDevs",
                    "waveInOpen",
                    "waveInPrepareHeader",
                    "waveInReset",
                    "waveInStart",
                    "waveInUnprepareHeader",
                    "waveOutClose",
                    "waveOutGetDevCapsW",
                    "waveOutGetErrorTextW",
                    "waveOutGetNumDevs",
                    "waveOutOpen",
                    "waveOutPrepareHeader",
                    "waveOutReset",
                    "waveOutUnprepareHeader",
                    "waveOutWrite"
                ],
                "WS2_32.dll": [
                    "WSACleanup",
                    "WSADuplicateSocketW",
                    "WSAGetLastError",
                    "WSARecv",
                    "WSARecvFrom",
                    "WSASend",
                    "WSASendTo",
                    "WSASetLastError",
                    "WSASocketW",
                    "WSAStartup",
                    "__WSAFDIsSet",
                    "accept",
                    "bind",
                    "closesocket",
                    "connect",
                    "freeaddrinfo",
                    "getaddrinfo",
                    "gethostbyaddr",
                    "gethostbyname",
                    "gethostname",
                    "getnameinfo",
                    "getpeername",
                    "getservbyname",
                    "getservbyport",
                    "getsockname",
                    "getsockopt",
                    "htonl",
                    "htons",
                    "inet_addr",
                    "inet_ntoa",
                    "ioctlsocket",
                    "listen",
                    "ntohl",
                    "ntohs",
                    "recv",
                    "recvfrom",
                    "select",
                    "send",
                    "sendto",
                    "setsockopt",
                    "shutdown",
                    "socket"
                ]
            }
        },
        "entropy_blocks": [
            1.7333130427289822,
            5.479679321551348,
            5.966013030979203,
            6.09145405692583,
            6.044680884644106,
            6.042705844081714,
            4.912071208873588,
            6.2891680255182205,
            5.884401887462617,
            5.947271522520094,
            6.094381592550571,
            5.2071337241677655,
            5.339842877161535,
            6.226203874934219,
            5.412691358557355,
            5.41818294570313,
            6.080755074292565,
            5.992877972600735,
            6.077381195753817,
            6.336695955941542,
            5.73027792817973,
            5.963407748259622,
            6.15469006757028,
            6.109623070691272,
            6.114518486647653,
            6.0458827289656245,
            6.06152155986615,
            5.955937657795839,
            6.357056019401742,
            5.908863204405296,
            6.2349773645220985,
            4.047281220938732,
            5.077321809085309,
            5.645386893607103,
            5.445975613094162,
            5.856711434094929,
            6.136553180136736,
            5.790933622862002,
            5.957853962283833,
            4.702322002318915,
            5.286985369078732,
            4.059397304160407,
            5.401532531854619,
            5.712145289551811,
            4.937032183505685,
            5.474684728397284,
            6.197931045008418,
            5.352219729528486,
            5.964232818654225,
            5.7265637283611275,
            6.015262465671811,
            5.605884279492677,
            5.033680698917991,
            5.886594949798569,
            6.247019174700554,
            5.763202407942304,
            5.632237012185365,
            5.518656838013079,
            5.786519234263387,
            5.181715701233723,
            4.711141148950803,
            5.8058850730843075,
            5.766126150522863,
            6.203538774199448,
            5.401890230026882,
            4.713429853103597,
            4.637493094879484,
            4.916645241716795,
            5.683885497188373,
            4.96191316386698,
            5.141422844548358,
            4.700660068673783,
            5.5135433645418,
            5.05927644615844,
            5.369501001635915,
            5.223028369357809,
            5.420046446699822,
            4.898191459145028,
            4.9830314385727235,
            5.529325473896079,
            5.5624677746115125,
            6.079507753988249,
            5.748675191530584,
            4.041021788434019,
            7.866196123021196,
            3.479414889694602,
            3.5832474701676853,
            5.995684275362261,
            5.280557661263167,
            4.786820724267644,
            7.462111740671926,
            6.367156309702975,
            4.284221441339227,
            4.2204416856572085,
            4.884960403890197,
            0.43915178102657015,
            3.7802920700672025,
            4.015319531167887,
            5.682511922849129,
            4.240701033763611,
            5.425323587823618
        ],
        "average_entropy_per_section": {
            ".text": 5.6777538875634965,
            ".rodata": 4.760600234885212,
            ".data": 3.6206797432155655,
            ".rdata": 4.472000310296717,
            ".pdata": 5.569497636169308,
            ".xdata": 4.840230974351722,
            ".bss": 1.7333130427289822,
            ".edata": 4.802096007944446,
            ".idata": 4.114218355584665,
            ".CRT": 3.7923626846226846,
            ".tls": 3.7923626846226846,
            ".reloc": 5.250845664909674
        },
        "signatures": {
            "microsoftvisualc++": "compiler",
            "mingw": "compiler"
        },
        "malapi_import_check": {
            "CryptAcquireContextA": {
                "description": "CryptAcquireContextA is used to acquire a handle to a particular key container within a particular cryptographic service provider (CSP)",
                "info": "Ransomware",
                "library": "Advapi32.dll"
            },
            "CryptCreateHash": {
                "description": "CryptCreateHash is used to create a hash.",
                "info": "Ransomware",
                "library": "Advapi32.dll"
            },
            "CryptDecrypt": {
                "description": "CryptDecrypt is used to decrypt data.",
                "info": "Ransomware",
                "library": "Advapi32.dll"
            },
            "CryptDestroyHash": {
                "description": "The CryptDestroyHash function destroys the hash object referenced by the hHash parameter. After a hash object has been destroyed, it can no longer be used.",
                "info": "Ransomware",
                "library": "Crypt32.dll"
            },
            "CryptDestroyKey": {
                "description": "CryptDestroyKey is used to destroy previously generated encryption keys.",
                "info": "Ransomware",
                "library": "Advapi32.dll"
            },
            "CryptGenRandom": {
                "description": "CryptGenRandom is used to fill a buffer with cryptographically random bytes.",
                "info": "Ransomware",
                "library": "Advapi32.dll"
            },
            "CryptReleaseContext": {
                "description": "The CryptReleaseContext function is used to release the handle of a cryptographic service provider (CSP) and a key container.",
                "info": "Ransomware",
                "library": "Crypt32.dll"
            },
            "OpenProcessToken": {
                "description": "OpenProcessToken is used to open the access token associated with a process.",
                "info": "Injection",
                "library": "Advapi32.dll"
            },
            "RegCloseKey": {
                "description": "RegCloseKey is used to close a handle to the specified registry key.",
                "info": "Helper",
                "library": "Advapi32.dll"
            },
            "RegEnumValueA": {
                "description": "RegEnumValueA is used to enumerate the values for the specified open registry key",
                "info": "Enumeration",
                "library": "Advapi32.dll"
            },
            "RegOpenKeyExA": {
                "description": "RegOpenKeyExA is used to open a specified registry key.",
                "info": "Helper",
                "library": "Advapi32.dll"
            },
            "RegQueryValueExA": {
                "description": "RegQueryValueExA is used to retrieve the type and data for the specified value name associated with an open registry key.",
                "info": "Enumeration",
                "library": "Advapi32.dll"
            },
            "BitBlt": {
                "description": "BitBlt is used to copy graphic data from one device to another. Spyware sometimes uses this function to capture screenshots.",
                "info": "Spying",
                "library": "Gdi32.dll"
            },
            "CreateFileA": {
                "description": "CreateFileA is used to create a new file or opens an existing file.",
                "info": "Helper",
                "library": "Kernel32.dll"
            },
            "CreateFileMappingA": {
                "description": "CreateFileMappingA creates a handle to a file mapping that loads a file into memory and makes it accessible via memory addresses. Launchers, loaders, and injectors use this function to read and modify PE files.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "CreateMutexA": {
                "description": "CreateMutexA is used to create a new mutex object. Mutexs are often used by malware to prevent the reinfection of a system with the same or different malware variant.",
                "info": "Helper",
                "library": "Kernel32.dll"
            },
            "CreateThread": {
                "description": "CreateThread is used to create a thread to execute within the virtual address space of the calling process. This function is commonly used for shellcode execution.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "CreateToolhelp32Snapshot": {
                "description": "CreateToolhelp32Snapshot is used to enumerate processes, threads, and modules. This function is commonly used by malware to enumerate processes before process injection.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "DeviceIoControl": {
                "description": "DeviceIoControl is used to send a control message from user space to a device driver. DeviceIoControl is popular with kernel malware because it is an easy, flexible way to pass information between user space and kernel space.",
                "info": "Helper",
                "library": "Kernel32.dll"
            },
            "FindClose": {
                "description": "FindClose is used to close a file search handle.",
                "info": "Helper",
                "library": "Kernel32.dll"
            },
            "FindFirstFileA": {
                "description": "FindFirstFileA is used to search through a directory and enumerate the filesystem.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "FindNextFileA": {
                "description": "FindNextFileA is used to search through a directory and enumerate the filesystem.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "GetComputerNameA": {
                "description": "GetComputerNameA is used to retrieve the computer name. This is commonly used by malware for anti-debugging purposes.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "GetCurrentProcess": {
                "description": "GetCurrentProcess is used to retrieve a handle for the current process.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "GetCurrentProcessId": {
                "description": "GetCurrentProcessId is used to retrieve the process identifier of the calling process.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "GetCurrentThread": {
                "description": "GetCurrentThread is used to retrieve a handle for the calling thread.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "GetCurrentThreadId": {
                "description": "GetCurrentThreadId is used to retrieve the thread identifier of the calling thread.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "GetLogicalProcessorInformation": {
                "description": "GetLogicalProcessorInformation is used to retrieve information about logical processors and related hardware. The function is used by malware for anti-debugging purposes.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "GetModuleFileNameA": {
                "description": "GetModuleFileNameA is used to return the filename of a module that is loaded in the current process. Malware can use this function to modify or copy files in the currently running process.",
                "info": "Helper",
                "library": "Kernel32.dll"
            },
            "GetModuleHandleA": {
                "description": "GetModuleHandleW is used to retrieve a module handle for the specified module. The module must have been loaded by the calling process. This function is often used along with GetProcAddress to dynamically retrieve the address of a function for evasion purposes.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "GetProcAddress": {
                "description": "GetProcAddress is used to get the memory address of a function in a DLL. This is often used by malware for obfuscation and evasion purposes to avoid having to call the function directly.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "GetProcessHeap": {
                "description": "GetProcessHeap is used to retrieve a handle to the default heap of the calling process.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "GetProcessId": {
                "description": "GetProcessId is used to retrieve the process identifier of the specified process.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "GetSystemDirectoryA": {
                "description": "GetSystemDirectoryA retrieve the path of the system directory.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "GetSystemTimeAsFileTime": {
                "description": "Retrieves the current system date and time. The information is in Coordinated Universal Time (UTC) format. This function is commonly used by malware for anti-debugging.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "GetTempPathA": {
                "description": "GetTempPathA is used to retrieve the path of the directory designated for temporary files. This is often used by malware when it requires a location for additional installations.",
                "info": "Helper",
                "library": "Kernel32.dll"
            },
            "GetThreadContext": {
                "description": "GetThreadContext is used to retrieve a thread's context. This is often used as part of process injection techniques.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "GetTickCount": {
                "description": "GetTickCount is used to retrieve the number of milliseconds since bootup. This function is used by malware for anti-debugging purposes.",
                "info": "Anti-Debugging",
                "library": "Kernel32.dll"
            },
            "GetWindowsDirectoryA": {
                "description": "GetWindowsDirectoryA is used to retreive the path to the Windows directory. This function may be used by malware retrieve the Windows path for additional installations.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "GlobalAlloc": {
                "description": "GlobalAlloc is used to allocate the specified number of bytes from the heap.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "HeapAlloc": {
                "description": "HeapAlloc is used to allocate a block of memory from a heap.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "HeapReAlloc": {
                "description": "HeapReAlloc is used to reallocate a block of memory from a heap.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "IsDebuggerPresent": {
                "description": "IsDebuggerPresent is used to determine whether the calling process is being debugged by a user-mode debugger.",
                "info": "Anti-Debugging",
                "library": "Kernel32.dll"
            },
            "LoadLibraryA": {
                "description": "LoadLibraryA is used to load a specified module into the address space of the calling process. Malware commonly use this to load DLLs dynamically for evasion purposes.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "LoadLibraryExA": {
                "description": "LoadLibraryExA is used to load a specified module into the address space of the calling process. Malware commonly use this to load DLLs dynamically for evasion purposes.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "MapViewOfFile": {
                "description": "MapViewOfFile is used for heap allocation and manipulation.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "MoveFileExA": {
                "description": "MoveFileExA is used to move an existing file or a directory, including its children.",
                "info": "Helper",
                "library": "Kernel32.dll"
            },
            "OpenProcess": {
                "description": "OpenProcess is used to get a handle on a process. This function is commonly used by malware during process injection.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "OutputDebugStringA": {
                "description": "OutputDebugStringA sends a string to the debugger for display. This function can be used as an anti-debugging technique.",
                "info": "Anti-Debugging",
                "library": "Kernel32.dll"
            },
            "Process32First": {
                "description": "Process32First is used as part of CreateToolhelp32Snapshot for enumeration purposes.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "Process32Next": {
                "description": "Process32Next is used as part of CreateToolhelp32Snapshot for enumeration purposes.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "QueryPerformanceCounter": {
                "description": "QueryPerformanceCounter is used to retrieve the frequency of the performance counter. This function is commonly used by malware for anti-debugging purposes. The malware will measure the time before and after an operation, if the time exceeds taken expected time, the malware will terminate or activate a benign function.",
                "info": "Anti-Debugging",
                "library": "Kernel32.dll"
            },
            "QueryPerformanceFrequency": {
                "description": "QueryPerformanceFrequency is used to retrieve the frequency of the performance counter. This function is commonly used by malware for anti-debugging purposes. The malware will measure the time before and after an operation, if the time exceeds taken expected time, the malware will terminate or activate a benign function.",
                "info": "Anti-Debugging",
                "library": "Kernel32.dll"
            },
            "ReadFile": {
                "description": "ReadFile is used to read data from the specified file or input/output (I/O) device.",
                "info": "Enumeration",
                "library": "Kernel32.dll"
            },
            "ResumeThread": {
                "description": "ResumeThread is used to resume a specified thread often times as part of process injection.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "SetEnvironmentVariableA": {
                "description": "SetEnvironmentVariableA sets the contents of the specified environment variable for the current process.  Setting custom envrinoment variables can be used for obfuscation and evasion purposes.",
                "info": "Evasion",
                "library": "Kernel32.dll"
            },
            "SetThreadContext": {
                "description": "SetThreadContext is used to modify a thread's context. This is often used as part of process injection techniques.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "SetThreadPriority": {
                "description": "SetThreadPriority is used to set the priority value for the specified thread. This value, together with the priority class of the thread's process, determines the thread's base priority level.",
                "info": "Helper",
                "library": "Kernel32.dll"
            },
            "Sleep": {
                "description": "Sleep is used to suspend the execution of the current thread for a set time. This function is commonly used for time-based evasion by adding delays in the code.",
                "info": "Evasion",
                "library": "Kernel32.dll"
            },
            "SuspendThread": {
                "description": "SuspendThread is used to suspend a specified thread often times as part of process injection or to tamper with a legitimate application.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "TerminateProcess": {
                "description": "TerminateProcess is used to terminate a process.",
                "info": "Helper",
                "library": "Kernel32.dll"
            },
            "UnmapViewOfFile": {
                "description": "UnmapViewOfFile is used to unmap a mapped view of a file from the calling process's address space.",
                "info": "Helper",
                "library": "Kernel32.dll"
            },
            "VirtualAlloc": {
                "description": "VirtualAlloc is often used by malware to allocate memory as part of process injection.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "VirtualProtect": {
                "description": "VirtualProtect is often used by malware to modify memory protection (often to allow write or execution).",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "WaitForMultipleObjects": {
                "description": "WaitForMultipleObjects is used to wait until one or all of the specified objects are in the signaled state or the time-out interval elapses. This function is commonly used to allow time for shellcode to execute or for time-based evasion.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "WaitForSingleObject": {
                "description": "WaitForSingleObject is used to delay the execution of an object. This function is commonly used to allow time for shellcode being executed within a thread to run. It is also used for time-based evasion.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "WaitForSingleObjectEx": {
                "description": "WaitForSingleObjectEx is used to delay the execution of an object. This function is commonly used to allow time for shellcode being executed within a thread to run. It is also used for time-based evasion.",
                "info": "Injection",
                "library": "Kernel32.dll"
            },
            "WriteFile": {
                "description": "WriteFile is used to write data to the specified file or input/output (I/O) device.",
                "info": "Helper",
                "library": "Kernel32.dll"
            },
            "CreateWindowExA": {
                "description": "CreateWindowExA is used to create an overlapped, pop-up, or child window with an extended window style. This function is commonly used by malware to create invisible windows or for evasion purposes.",
                "info": "Evasion",
                "library": "User32.dll"
            },
            "GetAsyncKeyState": {
                "description": "GetAsyncKeyState is used to determine when a specific key is pressed. This function is commonly used by keyloggers.",
                "info": "Spying",
                "library": "User32.dll"
            },
            "GetClipboardData": {
                "description": "GetClipboardData is used to retrieve copied data residing in the clipboard.",
                "info": "Spying",
                "library": "User32.dll"
            },
            "GetDC": {
                "description": "GetDC is used to retrieve a handle to a device context (DC) for the client area of a specified window or for the entire screen. This function is commonly used by spyware for taking screenshots.",
                "info": "Spying",
                "library": "User32.dll"
            },
            "GetDesktopWindow": {
                "description": "GetDesktopWindow is used to get a handle to the desktop window that covers the entire screen.",
                "info": "Helper",
                "library": "User32.dll"
            },
            "GetKeyState": {
                "description": "GetKeyState is used to retrieve the status of the specified virtual key. This function is commonly used by keyloggers.",
                "info": "Spying",
                "library": "User32.dll"
            },
            "GetKeyboardState": {
                "description": "GetKeyboardState is used to copy the status of the 256 virtual keys to the specified buffer. This function is commonly used by keyloggers.",
                "info": "Spying",
                "library": "User32.dll"
            },
            "GetRawInputData": {
                "description": "GetRawInputData is used to retrieve the raw input data from a specified device. This function is commonly used by keyloggers.",
                "info": "Spying",
                "library": "User32.dll"
            },
            "OpenClipboard": {
                "description": "OpenClipboard is used to get a handle on the clipboard.",
                "info": "Helper",
                "library": "User32.dll"
            },
            "PeekMessageA": {
                "description": "PeekMessageA is used to check for incoming sent messages, checks the thread message queue for a posted message, and retrieves the message (if any exist).",
                "info": "Spying",
                "library": "User32.dll"
            },
            "RegisterRawInputDevices": {
                "description": "RegisterRawInputDevices is used to register the devices that supply raw input.",
                "info": "Spying",
                "library": "User32.dll"
            },
            "SendMessageA": {
                "description": "SendMessageA is used to send the specified message to a window or windows.",
                "info": "Spying",
                "library": "User32.dll"
            },
            "SetClipboardData": {
                "description": "SetClipboardData is used to place data on the clipboard in a specified clipboard format.",
                "info": "Helper",
                "library": "User32.dll"
            },
            "SetFocus": {
                "description": "SetFocus is used to set the keyboard focus to the specified window",
                "info": "Helper",
                "library": "User32.dll"
            },
            "SetForegroundWindow": {
                "description": "SetForegroundWindow is used for bring the thread that created the specified window into the foreground and activates the window",
                "info": "Helper",
                "library": "User32.dll"
            },
            "SetTimer": {
                "description": "SetTimer is used to create a timer with the specified time-out value. This function is commonly used by malware for time-based evasion",
                "info": "Evasion",
                "library": "User32.dll"
            },
            "SetWindowLongPtrA": {
                "description": "SetWindowLongPtrA is used to changes an attribute of a specified window.",
                "info": "Helper",
                "library": "User32.dll"
            },
            "ShowWindow": {
                "description": "ShowWindow is used to set the specified window's show state.",
                "info": "Helper",
                "library": "User32.dll"
            },
            "WSACleanup": {
                "description": "WSACleanup is used to terminate the use of the Winsock 2 DLL. This function is commonly used by malware upon successfully utilizing the Winsock 2 functions.",
                "info": "Internet",
                "library": "Ws2_32.dll"
            },
            "WSAStartup": {
                "description": "WSAStartup is used to initiate use of the Winsock DLL by a process.",
                "info": "Internet",
                "library": "Ws2_32.dll"
            },
            "ioctlsocket": {
                "description": "ioctlsocket takes control of the I/O mode of a socket in any state",
                "info": "Internet",
                "library": "Ws2_32.lib"
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

    // Your Next.js component file

// Assuming you have access to jsonData.average_entropy_per_section and jsonData.pe_header.sections
    const averageEntropyData = jsonData.average_entropy_per_section;
    const sectionsData = jsonData.pe_header.sections;

    const combinedData = Object.keys(sectionsData).reduce((result: any, key: any) => {
        if (averageEntropyData[key]) {
            result[key] = {
                ...sectionsData[key],
                average_entropy: averageEntropyData[key],
        };
    }
        return result;
    }, 
    {});

// Use combinedData in your component
console.log(combinedData); // or perform any further operations with combinedData


// Example of how the combined data will look
console.log(combinedData);


// Example of how the combined data will look
console.log(combinedData);



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
            <Table title="Sections" data={combinedData} type="default"/>
            <CollapsiblePanel title="Overlay info" data={overlayInfo} type="default"/>
            <EntropyGraphPanel title="Entropy graph" entropyBlocks={jsonData.entropy_blocks} type="default" />
            <CollapsiblePanel title="Entropy info" data={jsonData.average_entropy_per_section} type="default"/>
            <CollapsiblePanel title="Signatures" data={signatures.Signatures} type="default"/>
        </div>
        </div>
      );
};

export default About;