var page_plugin_project_setup =
[
    [ "Plugin Directory Structure", "page_plugin_directory_structure.html", null ],
    [ "Project Structure", "page_project_structure.html", [
      [ "General", "page_project_structure.html#section_projectstructure_general", null ],
      [ "Visual Studio", "page_project_structure.html#section_projectstructure_visualstudio", null ],
      [ "Windows DLL Dependencies", "page_project_structure.html#section_projectstructure_WindowsDLLDependencies", null ],
      [ "Mac OS X / XCode", "page_project_structure.html#section_projectstructure_XCode", null ]
    ] ],
    [ "Visual Studio: Setup Project by Cloning cinema4dsdk", "page_project_from_clone_visual.html", [
      [ "Setup Procedure", "page_project_from_clone_visual.html#section_projectfromclone_vs_procedure", [
        [ "Step 1 - Copy cinema4dsdk Project", "page_project_from_clone_visual.html#section_projectfromclone_vs_copy_cinema4dsdk", null ],
        [ "Step 2 - Edit the Solution", "page_project_from_clone_visual.html#section_projectfromclone_vs_edit_solution", null ],
        [ "Step 3 - Change MAXON_ROOTDIR", "page_project_from_clone_visual.html#section_projectfromclone_vs_maxon_rootdir", null ],
        [ "Step 4 - Finally", "page_project_from_clone_visual.html#section_projectfromclone_vs_finally", null ],
        [ "Optional Post Build Event", "page_project_from_clone_visual.html#section_projectfromclone_vs_postbuildevent", null ]
      ] ]
    ] ],
    [ "Visual Studio: Setup Plugin Project from Scratch", "page_project_from_scratch_visual.html", [
      [ "Step 1 - Create a New Project", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_create_project", null ],
      [ "Step 2 - Add x64 Platform and Properties", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_x64_props", null ],
      [ "Step 3 - Optionally Remove Win32 Properties", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_remove_win32_props", null ],
      [ "Step 4 - Add MAXON_ROOTDIR", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_add_maxon_rootdir", null ],
      [ "Step 5 - Add Cinema 4D Release and Debug Properties", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_add_c4d_props", null ],
      [ "Step 6 - Add cinema.framework.includes Properties", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_add_cinema_framework_includes_props", null ],
      [ "Step 7 - Add cinema.framework Project", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_add_cinema_framework_proj", null ],
      [ "Step 8 - A Few Configuration Tweaks", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_configuration_tweaks", [
        [ "Property Pages: General", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_configuration_tweaks_general", null ],
        [ "Property Pages: C/C++ General", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_configuration_tweaks_cpp_general", null ],
        [ "Property Pages: C/C++ Code Generation", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_configuration_tweaks_cpp_code_generation", null ],
        [ "Property Pages: Debugging", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_configuration_tweaks_debugging", null ],
        [ "Property Pages: C/C++ Optimization", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_configuration_tweaks_cpp_optimitation", null ]
      ] ],
      [ "Step 9 - Optionally Configure Debug Mode", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_configuration_debug", null ],
      [ "Step 10 - Add Your Source Files", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_add_source_files", null ],
      [ "Warning on First Start", "page_project_from_scratch_visual.html#section_projectfromscratch_vs_first_start", null ]
    ] ],
    [ "Xcode: Setup Project by Cloning cinema4dsdk", "page_project_from_clone_xcode.html", [
      [ "Setup Procedure", "page_project_from_clone_xcode.html#section_projectfromclone_xcode_procedure", [
        [ "Step 1 - Project Directory Structure", "page_project_from_clone_xcode.html#section_projectfromclone_xcode_dir_structure", null ],
        [ "Step 2 - Copy and Rename cinema4dsdk.xcodeproj", "page_project_from_clone_xcode.html#section_projectfromclone_xcode_get_xcodeproj", null ],
        [ "Step 3 - Delete Example Sources From the Xcode Project", "page_project_from_clone_xcode.html#section_projectfromclone_xcode_delete_example_source", null ],
        [ "Step 4 - Add Your Sources to the Project", "page_project_from_clone_xcode.html#section_projectfromclone_xcode_add_sources", null ],
        [ "Step 5 - Rename Your Product", "page_project_from_clone_xcode.html#section_projectfromclone_xcode_rename_product", null ],
        [ "Step 6 - Rename the Scheme", "page_project_from_clone_xcode.html#section_projectfromclone_xcode_rename_scheme", null ],
        [ "Step 7 - Rename the Target", "page_project_from_clone_xcode.html#section_projectfromclone_xcode_rename_target", null ],
        [ "Step 8 - Add Additional Include Directories", "page_project_from_clone_xcode.html#section_projectfromclone_xcode_additional_include_dirs", null ],
        [ "Step 9 - Correct Build Target", "page_project_from_clone_xcode.html#section_projectfromclone_xcode_correct_build_target", null ]
      ] ],
      [ "Footnotes", "page_project_from_clone_xcode.html#section_projectfromclone_xcode_footnotes", null ]
    ] ],
    [ "Xcode: Moving Plugin Projects", "page_project_move_xcode.html", [
      [ "Before You Start", "page_project_move_xcode.html#section_projectmove_xcode_before_start", null ],
      [ "Moving Within the Plugins Folder", "page_project_move_xcode.html#section_projectmove_xcode_within_plugins", [
        [ "Step 1 - Move the Folder", "page_project_move_xcode.html#section_projectmove_xcode_move_folder", null ],
        [ "Step 2 - Open the Project", "page_project_move_xcode.html#section_projectmove_xcode_open_project", null ],
        [ "Step 3 - Correct Base Configurations", "page_project_move_xcode.html#section_projectmove_xcode_base_configurations", null ],
        [ "Step 4 - Correct the Dependency on cinema.framework", "page_project_move_xcode.html#section_projectmove_xcode_cinema_framework", null ],
        [ "Step 5 - Change MAXON_ROOTDIR", "page_project_move_xcode.html#section_projectmove_maxon_rootdir", null ],
        [ "Step 6 - Tell the Linker About cinema.framework", "page_project_move_xcode.html#section_projectmove_linker", null ],
        [ "Step 7 - Cleanup", "page_project_move_xcode.html#section_projectmove_cleanup", null ],
        [ "Step 8 - Go!", "page_project_move_xcode.html#section_projectmove_go", null ]
      ] ]
    ] ]
];