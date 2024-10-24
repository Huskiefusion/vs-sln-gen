
exports.generateSln = (projectName, projectTypeUUID, slnUUID, projectUUID) => {
	return `Microsoft Visual Studio Solution File, Format Version 12.00 
#Visual Studio Version 17
VisualStudioVersion = 17.11.35208.52
MinimumVisualStudioVersion = 10.0.40219.1 
Project("{${projectTypeUUID}}") = "${projectName}", "${projectName}\\${projectName}.vcxproj", "{${projectUUID}}"
EndProject
Global
	GlobalSection(SolutionConfigurationPlatforms) = preSolution
		Debug|x64 = Debug|x64
		Debug|x86 = Debug|x86
		Release|x64 = Release|x64
		Release|x86 = Release|x86
	EndGlobalSection
	GlobalSection(ProjectConfigurationPlatforms) = postSolution
		{${projectUUID}}.Debug|x64.ActiveCfg = Debug|x64
		{${projectUUID}}.Debug|x64.Build.0 = Debug|x64
		{${projectUUID}}.Debug|x86.ActiveCfg = Debug|Win32
		{${projectUUID}}.Debug|x86.Build.0 = Debug|Win32
		{${projectUUID}}.Release|x64.ActiveCfg = Release|x64
		{${projectUUID}}.Release|x64.Build.0 = Release|x64
		{${projectUUID}}.Release|x86.ActiveCfg = Release|Win32
		{${projectUUID}}.Release|x86.Build.0 = Release|Win32
	EndGlobalSection
	GlobalSection(SolutionProperties) = preSolution
		HideSolutionNode = FALSE
	EndGlobalSection
	GlobalSection(ExtensibilityGlobals) = postSolution
		SolutionGuid = {${slnUUID}}
	EndGlobalSection
EndGlobal`
}

/* -------------------------------------------------------------------------------
----------------------------------------------------------------------------------
---------------------------------------------------------------------------------- */

exports.generateVcxproj = (projectName, projectUUID, sourceFiles, headerFiles, resourceFiles) => {
	let fileContent = `<?xml version="1.0" encoding="utf-8"?>
<Project DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
	<ItemGroup Label="ProjectConfigurations">
		<ProjectConfiguration Include="Debug|Win32">
			<Configuration>Debug</Configuration>
			<Platform>Win32</Platform>
		</ProjectConfiguration>
		<ProjectConfiguration Include="Release|Win32">
			<Configuration>Release</Configuration>
			<Platform>Win32</Platform>
		</ProjectConfiguration>
		<ProjectConfiguration Include="Debug|x64">
			<Configuration>Debug</Configuration>
			<Platform>x64</Platform>
		</ProjectConfiguration>
		<ProjectConfiguration Include="Release|x64">
			<Configuration>Release</Configuration>
			<Platform>x64</Platform>
		</ProjectConfiguration>
	</ItemGroup>
	<PropertyGroup Label="Globals">
		<VCProjectVersion>17.0</VCProjectVersion>
		<Keyword>Win32Proj</Keyword>
		<ProjectGuid>{${projectUUID}}</ProjectGuid>
		<RootNamespace>${projectName}</RootNamespace>
		<WindowsTargetPlatformVersion>10.0</WindowsTargetPlatformVersion>
	</PropertyGroup>
	<Import Project="$(VCTargetsPath)\Microsoft.Cpp.Default.props" />
	<PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Debug|Win32'" Label="Configuration">
		<ConfigurationType>Application</ConfigurationType>
		<UseDebugLibraries>true</UseDebugLibraries>
		<PlatformToolset>v143</PlatformToolset>
		<CharacterSet>Unicode</CharacterSet>
	</PropertyGroup>
	<PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Release|Win32'" Label="Configuration">
		<ConfigurationType>Application</ConfigurationType>
		<UseDebugLibraries>false</UseDebugLibraries>
		<PlatformToolset>v143</PlatformToolset>
		<WholeProgramOptimization>true</WholeProgramOptimization>
		<CharacterSet>Unicode</CharacterSet>
	</PropertyGroup>
	<PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Debug|x64'" Label="Configuration">
		<ConfigurationType>Application</ConfigurationType>
		<UseDebugLibraries>true</UseDebugLibraries>
		<PlatformToolset>v143</PlatformToolset>
		<CharacterSet>Unicode</CharacterSet>
	</PropertyGroup>
	<PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Release|x64'" Label="Configuration">
		<ConfigurationType>Application</ConfigurationType>
		<UseDebugLibraries>false</UseDebugLibraries>
		<PlatformToolset>v143</PlatformToolset>
		<WholeProgramOptimization>true</WholeProgramOptimization>
		<CharacterSet>Unicode</CharacterSet>
	</PropertyGroup>
	<Import Project="$(VCTargetsPath)\Microsoft.Cpp.props" />
	<ImportGroup Label="ExtensionSettings">
	</ImportGroup>
	<ImportGroup Label="Shared">
	</ImportGroup>
	<ImportGroup Label="PropertySheets" Condition="'$(Configuration)|$(Platform)'=='Debug|Win32'">
		<Import Project="$(UserRootDir)\Microsoft.Cpp.$(Platform).user.props" Condition="exists('$(UserRootDir)\Microsoft.Cpp.$(Platform).user.props')" Label="LocalAppDataPlatform" />
	</ImportGroup>
	<ImportGroup Label="PropertySheets" Condition="'$(Configuration)|$(Platform)'=='Release|Win32'">
		<Import Project="$(UserRootDir)\Microsoft.Cpp.$(Platform).user.props" Condition="exists('$(UserRootDir)\Microsoft.Cpp.$(Platform).user.props')" Label="LocalAppDataPlatform" />
	</ImportGroup>
	<ImportGroup Label="PropertySheets" Condition="'$(Configuration)|$(Platform)'=='Debug|x64'">
		<Import Project="$(UserRootDir)\Microsoft.Cpp.$(Platform).user.props" Condition="exists('$(UserRootDir)\Microsoft.Cpp.$(Platform).user.props')" Label="LocalAppDataPlatform" />
	</ImportGroup>
	<ImportGroup Label="PropertySheets" Condition="'$(Configuration)|$(Platform)'=='Release|x64'">
		<Import Project="$(UserRootDir)\Microsoft.Cpp.$(Platform).user.props" Condition="exists('$(UserRootDir)\Microsoft.Cpp.$(Platform).user.props')" Label="LocalAppDataPlatform" />
	</ImportGroup>
	<PropertyGroup Label="UserMacros" />
	<ItemDefinitionGroup Condition="'$(Configuration)|$(Platform)'=='Debug|Win32'">
		<ClCompile>
			<WarningLevel>Level3</WarningLevel>
			<SDLCheck>true</SDLCheck>
			<PreprocessorDefinitions>WIN32;_DEBUG;_CONSOLE;%(PreprocessorDefinitions)</PreprocessorDefinitions>
			<ConformanceMode>true</ConformanceMode>
		</ClCompile>
		<Link>
			<SubSystem>Console</SubSystem>
			<GenerateDebugInformation>true</GenerateDebugInformation>
		</Link>
	</ItemDefinitionGroup>
	<ItemDefinitionGroup Condition="'$(Configuration)|$(Platform)'=='Release|Win32'">
		<ClCompile>
			<WarningLevel>Level3</WarningLevel>
			<FunctionLevelLinking>true</FunctionLevelLinking>
			<IntrinsicFunctions>true</IntrinsicFunctions>
			<SDLCheck>true</SDLCheck>
			<PreprocessorDefinitions>WIN32;NDEBUG;_CONSOLE;%(PreprocessorDefinitions)</PreprocessorDefinitions>
			<ConformanceMode>true</ConformanceMode>
		</ClCompile>
		<Link>
			<SubSystem>Console</SubSystem>
			<EnableCOMDATFolding>true</EnableCOMDATFolding>
			<OptimizeReferences>true</OptimizeReferences>
			<GenerateDebugInformation>true</GenerateDebugInformation>
		</Link>
	</ItemDefinitionGroup>
	<ItemDefinitionGroup Condition="'$(Configuration)|$(Platform)'=='Debug|x64'">
		<ClCompile>
			<WarningLevel>Level3</WarningLevel>
			<SDLCheck>true</SDLCheck>
			<PreprocessorDefinitions>_DEBUG;_CONSOLE;%(PreprocessorDefinitions)</PreprocessorDefinitions>
			<ConformanceMode>true</ConformanceMode>
		</ClCompile>
		<Link>
			<SubSystem>Console</SubSystem>
			<GenerateDebugInformation>true</GenerateDebugInformation>
		</Link>
	</ItemDefinitionGroup>
	<ItemDefinitionGroup Condition="'$(Configuration)|$(Platform)'=='Release|x64'">
		<ClCompile>
			<WarningLevel>Level3</WarningLevel>
			<FunctionLevelLinking>true</FunctionLevelLinking>
			<IntrinsicFunctions>true</IntrinsicFunctions>
			<SDLCheck>true</SDLCheck>
			<PreprocessorDefinitions>NDEBUG;_CONSOLE;%(PreprocessorDefinitions)</PreprocessorDefinitions>
			<ConformanceMode>true</ConformanceMode>
		</ClCompile>
		<Link>
			<SubSystem>Console</SubSystem>
			<EnableCOMDATFolding>true</EnableCOMDATFolding>
			<OptimizeReferences>true</OptimizeReferences>
			<GenerateDebugInformation>true</GenerateDebugInformation>
		</Link>
	</ItemDefinitionGroup>\n`;

		fileContent += `\t<ItemGroup>\n`;
		sourceFiles.forEach(element => {
			fileContent += `\t\t<ClCompile Include="${element.slice(element.lastIndexOf("/")+1)}" />\n`;
		});
		fileContent += `\t</ItemGroup>\n`;

		fileContent += `\t<ItemGroup>\n`;
		headerFiles.forEach(element => {
			fileContent += `\t\t<ClInclude Include="${element.slice(element.lastIndexOf("/")+1)}" />\n`;
		});
		fileContent += `\t</ItemGroup>\n`;

		fileContent += `\t<ItemGroup>\n`;
		resourceFiles.forEach(element => {
			fileContent += `\t\t<Text Include="${element.slice(element.lastIndexOf("/")+1)}" />\n`; // TODO: Add support for other filetypes
		});
		fileContent += `\t</ItemGroup>\n`;

		fileContent+=`\t<Import Project="$(VCTargetsPath)\Microsoft.Cpp.targets" />
	<ImportGroup Label="ExtensionTargets">
	</ImportGroup>
</Project>`

	return fileContent;
}
/* -------------------------------------------------------------------------------
----------------------------------------------------------------------------------
---------------------------------------------------------------------------------- */

exports.generateVcxfilters = (sourceFiles, headerFiles, resourceFiles) =>{
	let fileContent = `<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="4.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
	<ItemGroup>
		<Filter Include="Source Files">
			<UniqueIdentifier>{4FC737F1-C7A5-4376-A066-2A32D752A2FF}</UniqueIdentifier> 
			<Extensions>cpp;c;cc;cxx;c++;cppm;ixx;def;odl;idl;hpj;bat;asm;asmx</Extensions>
		</Filter>
		<Filter Include="Header Files">
			<UniqueIdentifier>{93995380-89BD-4b04-88EB-625FBE52EBFB}</UniqueIdentifier>
			<Extensions>h;hh;hpp;hxx;h++;hm;inl;inc;ipp;xsd</Extensions>
		</Filter>
		<Filter Include="Resource Files">
			<UniqueIdentifier>{67DA6AB6-F800-4c08-8B7A-83BB121AAD01}</UniqueIdentifier> 
			<Extensions>rc;ico;cur;bmp;dlg;rc2;rct;bin;rgs;gif;jpg;jpeg;jpe;resx;tiff;tif;png;wav;mfcribbon-ms</Extensions>
		</Filter>
	</ItemGroup>\n`
	fileContent+=`\t<ItemGroup>`;
	sourceFiles.forEach(element => {
		fileContent+=`
		<ClCompile Include="${element.slice(element.lastIndexOf("/")+1)}">
			<Filter>Source Files</Filter>
		</ClCompile>`
	});
	fileContent+=`\n\t</ItemGroup>\n`;

	fileContent+=`\t<ItemGroup>`;
	headerFiles.forEach(element => {
		fileContent+=`
		<ClInclude Include="${element.slice(element.lastIndexOf("/")+1)}">
			<Filter>Header Files</Filter>
		</ClInclude>\n`
	});
	fileContent+=`\n\t</ItemGroup>\n`;

	fileContent+=`\t<ItemGroup>`;
	resourceFiles.forEach(element => {
		fileContent+=`
		<ClCompile Include="${element.slice(element.lastIndexOf("/")+1)}">
			<Filter>Resource Files</Filter>
		</ClCompile>`
	});
	fileContent+=`\n\t</ItemGroup>\n`;

	fileContent+=`</Project>`
	return fileContent;
}
