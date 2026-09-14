var page_general_info =
[
    [ "Plugin Project Setup", "page_plugin_project_setup.html", "page_plugin_project_setup" ],
    [ "Advice for Developers", "page_advice_for_developers.html", null ],
    [ "Debugging Plugins", "page_debugging_plugins.html", [
      [ "Introduction", "page_debugging_plugins.html#section_debuggingplugins_introduction", null ],
      [ "1. Preparing Your Toolbox", "page_debugging_plugins.html#section_debuggingplugins_prepare_toolbox", [
        [ "1.1 Start Cinema 4D Automatically With Your Debugger", "page_debugging_plugins.html#section_debuggingplugins_start_c4d_with_debugger", [
          [ "1.1.1 Visual Studio", "page_debugging_plugins.html#section_debuggingplugins_start_c4d_with_debugger_vs", null ],
          [ "1.1.2 Xcode", "page_debugging_plugins.html#section_debuggingplugins_start_c4d_with_debugger_xcode", null ]
        ] ],
        [ "1.2 Start Cinema 4D in Debug Mode", "page_debugging_plugins.html#section_debuggingplugins_start_c4d_debug_mode", [
          [ "1.2.1 Cinema 4D < R15", "page_debugging_plugins.html#section_debuggingplugins_start_c4d_debug_mode_r15", null ],
          [ "1.2.2 Cinema 4D ≥ R15 and Visual Studio", "page_debugging_plugins.html#section_debuggingplugins_start_c4d_debug_mode_r16_vs", null ],
          [ "1.2.3 Cinema 4D ≥ R15 and Xcode", "page_debugging_plugins.html#section_debuggingplugins_start_c4d_debug_mode_r16_xcode", null ]
        ] ],
        [ "1.3 More Commandline Arguments", "page_debugging_plugins.html#section_debuggingplugins_commandline_args", null ],
        [ "1.4 Use TypeViewer for VisualStudio and Xcode", "page_debugging_plugins.html#section_debuggingplugins_type_viewer", null ]
      ] ],
      [ "2. Time Is Money", "page_debugging_plugins.html#section_debuggingplugins_time_is_money", null ],
      [ "3. Printf Debugging", "page_debugging_plugins.html#section_debuggingplugins_printf_debugging", [
        [ "3.1 void GePrint(const String& str)", "page_debugging_plugins.html#section_debuggingplugins_printf_debugging_geprint", null ],
        [ "3.2 void GeConsoleOut(const String& str)", "page_debugging_plugins.html#section_debuggingplugins_printf_debugging_geconsoleout", null ],
        [ "3.3 void GeDebugOut(const String& s) and void GeDebugOut(const Char* s,  ...)", "page_debugging_plugins.html#section_debuggingplugins_printf_debugging_gedebugout", null ],
        [ "3.3 New in Cinema 4D R15", "page_debugging_plugins.html#section_debuggingplugins_printf_debugging_new_in_r15", [
          [ "3.3.1 CriticalOutput(fmt)", "page_debugging_plugins.html#section_debuggingplugins_printf_debugging_criticaloutput", null ],
          [ "3.3.2 DiagnosticOutput(fmt)", "page_debugging_plugins.html#section_debuggingplugins_printf_debugging_diagnosticoutput", null ],
          [ "3.3.3 DebugOutput(flags, fmt)", "page_debugging_plugins.html#section_debuggingplugins_printf_debugging_debugoutput", null ]
        ] ],
        [ "3.4 Which Print Goes Where", "page_debugging_plugins.html#section_debuggingplugins_printf_debugging_which_goes_where", null ],
        [ "3.5 Conversions to String", "page_debugging_plugins.html#section_debuggingplugins_printf_debugging_conversions", null ]
      ] ],
      [ "4. Beyond Printf Debugging - Use Your Debugger", "page_debugging_plugins.html#section_debuggingplugins_beyond_printf_debugging", [
        [ "4.1 Visual Studio", "page_debugging_plugins.html#section_debuggingplugins_beyond_printf_debugging_vs", [
          [ "4.1.1 Debug Windows", "page_debugging_plugins.html#section_debuggingplugins_beyond_printf_debugging_vs_debug_windows", null ],
          [ "4.1.2 Breakpoints", "page_debugging_plugins.html#section_debuggingplugins_beyond_printf_debugging_vs_breakpoints", null ]
        ] ],
        [ "4.2 Xcode", "page_debugging_plugins.html#section_debuggingplugins_beyond_printf_debugging_xcode", null ]
      ] ],
      [ "5. Built-in Bugtraps", "page_debugging_plugins.html#section_debuggingplugins_builtin_bugtraps", null ],
      [ "6. Be Aware of Floating Point Madness", "page_debugging_plugins.html#section_debuggingplugins_floating_point_madness", null ],
      [ "7. Keep an Eye on Your Memory Allocations", "page_debugging_plugins.html#section_debuggingplugins_memory_allocations", null ],
      [ "8. Multithreading Can Be Tricky", "page_debugging_plugins.html#section_debuggingplugins_multi_threading", null ],
      [ "9. Watch Your Execution Times", "page_debugging_plugins.html#section_debuggingplugins_execution_times", null ],
      [ "10. Active Object Dialog Plugin", "page_debugging_plugins.html#section_debuggingplugins_activeobjectdialog_plugin", null ]
    ] ],
    [ "Stability and Testing", "page_stability_and_testing.html", [
      [ "Debugging", "page_stability_and_testing.html#section_stability_and_testing_debugging", null ],
      [ "Memory Statistics Dialog", "page_stability_and_testing.html#section_stability_and_testing_memory_statistics", null ],
      [ "Constants", "page_stability_and_testing.html#section_stability_and_testing_constants", null ],
      [ "Global Static Classes", "page_stability_and_testing.html#section_stability_and_testing_global_static_classes", null ],
      [ "Cleanup", "page_stability_and_testing.html#section_stability_and_testing_cleanup", null ],
      [ "Dangerous Hooks", "page_stability_and_testing.html#section_stability_and_testing_dangerous_hooks", null ],
      [ "Virtual Function Calls", "page_stability_and_testing.html#section_stability_and_testing_virtual_function_calls", null ],
      [ "Threading", "page_stability_and_testing.html#section_stability_and_testing_threading", null ],
      [ "Current State To Object (CSTO)", "page_stability_and_testing.html#section_stability_and_testing_csto", null ],
      [ "Cinema 4D and OS Code", "page_stability_and_testing.html#section_stability_and_testing_c4d_and_os_code", null ],
      [ "Miscellaneous", "page_stability_and_testing.html#section_stability_and_testing_misc", null ]
    ] ],
    [ "Important Threading Information", "page_important_threading_information.html", [
      [ "Drawing Pipeline Thread", "page_important_threading_information.html#section_threading_drawing_pipeline", null ],
      [ "Forbidden Functions", "page_important_threading_information.html#section_threading_forbidden_functions", null ],
      [ "Using Core Messages", "page_important_threading_information.html#section_threading_core_messages", null ],
      [ "Rendering Thread", "page_important_threading_information.html#section_threading_rendering_thread", null ],
      [ "Scene Modifications", "page_important_threading_information.html#section_threading_scene_modifications", null ]
    ] ],
    [ "Floating-Point Notes", "page_floating_point_notes.html", [
      [ "Cinema 4D Datatypes", "page_floating_point_notes.html#section_floatingpoint_notes_c4d_datatypes", null ],
      [ "Limits", "page_floating_point_notes.html#section_floatingpoint_notes_limits", null ],
      [ "Inverse", "page_floating_point_notes.html#section_floatingpoint_notes_inverse", null ],
      [ "Safely Convert Float-Point into Integer", "page_floating_point_notes.html#section_floatingpoint_convert_to_int", null ],
      [ "Safely Compare Floating-Point on Equality", "page_floating_point_notes.html#section_floatingpoint_compare_on_equality", null ],
      [ "Floating-Point Weirdness", "page_floating_point_notes.html#section_floatingpoint_weirdness", null ],
      [ "Floating-Point Exceptions", "page_floating_point_notes.html#section_floatingpoint_exceptions", null ],
      [ "Importing Floating-Point Data", "page_floating_point_notes.html#section_floatingpoint_import", null ]
    ] ],
    [ "Plugin Code Style Guide", "page_plugin_code_style_guide.html", [
      [ "Introduction", "page_plugin_code_style_guide.html#section_plugincodestyleguide_introduction", null ],
      [ "1. Basic C++ Language", "page_plugin_code_style_guide.html#section_plugincodestyleguide_basic_language", [
        [ "1.1 C++ 11", "page_plugin_code_style_guide.html#section_plugincodestyleguide_c11", null ],
        [ "1.2 For Increments", "page_plugin_code_style_guide.html#section_plugincodestyleguide_for_increments", null ],
        [ "1.3 ANSI C Routines", "page_plugin_code_style_guide.html#section_plugincodestyleguide_ansi_c_routines", null ],
        [ "1.4 Casts", "page_plugin_code_style_guide.html#section_plugincodestyleguide_casts", null ],
        [ "1.5 Goto", "page_plugin_code_style_guide.html#section_plugincodestyleguide_goto", null ]
      ] ],
      [ "2. Cinema 4D C++ Specifics", "page_plugin_code_style_guide.html#section_plugincodestyleguide_c4d_specifics", [
        [ "2.1 External Libraries", "page_plugin_code_style_guide.html#section_plugincodestyleguide_external_libraries", null ],
        [ "2.2 Threading", "page_plugin_code_style_guide.html#section_plugincodestyleguide_threading", null ],
        [ "2.3 Global Static Classes", "page_plugin_code_style_guide.html#section_plugincodestyleguide_global_static_classes", null ],
        [ "2.4 Array Classes", "page_plugin_code_style_guide.html#section_plugincodestyleguide_array_classes", null ],
        [ "2.5 Range-Based for Loops and Iterators", "page_plugin_code_style_guide.html#section_plugincodestyleguide_rangebased_forloop", null ],
        [ "2.6 Magic Numbers", "page_plugin_code_style_guide.html#section_plugincodestyleguide_magic_numbers", null ]
      ] ],
      [ "3. Error Handling", "page_plugin_code_style_guide.html#section_plugincodestyleguide_error_handling", [
        [ "3.1 Defensive Coding", "page_plugin_code_style_guide.html#section_plugincodestyleguide_defensive_coding", null ],
        [ "3.2 Exceptions & RTTI", "page_plugin_code_style_guide.html#section_plugincodestyleguide_exeptions", null ],
        [ "3.3 Memory Checks", "page_plugin_code_style_guide.html#section_plugincodestyleguide_memory_checks", null ],
        [ "3.4 Memory Allocations", "page_plugin_code_style_guide.html#section_plugincodestyleguide_memory_allocations", null ],
        [ "3.5 Divisions by zero", "page_plugin_code_style_guide.html#section_plugincodestyleguide_divisions_by_zero", null ],
        [ "3.6 Type Conversions", "page_plugin_code_style_guide.html#section_plugincodestyleguide_type_conversions", null ],
        [ "3.7 Asserts, Stops and Output", "page_plugin_code_style_guide.html#section_plugincodestyleguide_asserts", null ]
      ] ],
      [ "4. File Structure", "page_plugin_code_style_guide.html#section_plugincodestyleguide_file_structure", [
        [ "4.1 File Names", "page_plugin_code_style_guide.html#section_plugincodestyleguide_file_names", null ],
        [ "4.2 Header Files", "page_plugin_code_style_guide.html#section_plugincodestyleguide_header_files", null ],
        [ "4.3 Header Guards", "page_plugin_code_style_guide.html#section_plugincodestyleguide_header_guards", null ],
        [ "4.4 File Length", "page_plugin_code_style_guide.html#section_plugincodestyleguide_file_length", null ],
        [ "4.5 Includes", "page_plugin_code_style_guide.html#section_plugincodestyleguide_includes", null ]
      ] ],
      [ "5. Datatypes", "page_plugin_code_style_guide.html#section_plugincodestyleguide_datatypes", [
        [ "5.1 Basic Datatypes", "page_plugin_code_style_guide.html#section_plugincodestyleguide_basic_datatypes", null ],
        [ "5.2 Boolean Values", "page_plugin_code_style_guide.html#section_plugincodestyleguide_boolean_values", null ],
        [ "5.3 Size Calculations", "page_plugin_code_style_guide.html#section_plugincodestyleguide_size_calculations", null ],
        [ "5.4 Unsigned Datatypes", "page_plugin_code_style_guide.html#section_plugincodestyleguide_unsigned_datatypes", null ],
        [ "5.5 Indices", "page_plugin_code_style_guide.html#section_plugincodestyleguide_indices", null ]
      ] ],
      [ "6. Comments", "page_plugin_code_style_guide.html#section_plugincodestyleguide_comments", [
        [ "6.1 Documentation Requirement", "page_plugin_code_style_guide.html#section_plugincodestyleguide_documentation_requirement", null ],
        [ "6.2 Unnecessary Comments", "page_plugin_code_style_guide.html#section_plugincodestyleguide_unnecessry_comments", null ]
      ] ],
      [ "7. Formatting", "page_plugin_code_style_guide.html#section_plugincodestyleguide_formatting", [
        [ "7.1 Tab Width & Use", "page_plugin_code_style_guide.html#section_plugincodestyleguide_tab_width", null ],
        [ "7.2 Spaces", "page_plugin_code_style_guide.html#section_plugincodestyleguide_spaces", null ],
        [ "7.3 Compact Algorithms", "page_plugin_code_style_guide.html#section_plugincodestyleguide_compact_algorithm", null ],
        [ "7.4 Bracket Alignment", "page_plugin_code_style_guide.html#section_plugincodestyleguide_bracket_alignment", null ],
        [ "7.5 Use of Brackets", "page_plugin_code_style_guide.html#section_plugincodestyleguide_use_of_brackets", null ],
        [ "7.6 Switch Statements", "page_plugin_code_style_guide.html#section_plugincodestyleguide_switch_statements", null ],
        [ "7.7 Switch Statements Without Break", "page_plugin_code_style_guide.html#section_plugincodestyleguide_switch_without_break", null ],
        [ "7.8 If - Statements", "page_plugin_code_style_guide.html#if_statements", null ],
        [ "7.9 Else Statements", "page_plugin_code_style_guide.html#section_plugincodestyleguide_else_statements", null ],
        [ "7.10 Spaces and pointers", "page_plugin_code_style_guide.html#section_plugincodestyleguide_spaces_and_pointers", null ],
        [ "7.11 Ifdefs", "page_plugin_code_style_guide.html#section_plugincodestyleguide_ifdefs", null ],
        [ "7.12 Operators", "page_plugin_code_style_guide.html#section_plugincodestyleguide_opterators", null ],
        [ "7.13 Do-While Loops", "page_plugin_code_style_guide.html#section_plugincodestyleguide_do_while_loops", null ],
        [ "7.14 For - Statements", "page_plugin_code_style_guide.html#section_plugincodestyleguide_for_statements", null ]
      ] ],
      [ "8. Naming", "page_plugin_code_style_guide.html#section_plugincodestyleguide_naming", [
        [ "8.1 Enums", "page_plugin_code_style_guide.html#section_plugincodestyleguide_enums", null ],
        [ "8.2 Flag Sets", "page_plugin_code_style_guide.html#section_plugincodestyleguide_flag_sets", null ],
        [ "8.3 Constants, Macros and Enums", "page_plugin_code_style_guide.html#section_plugincodestyleguide_constants_macros_enums", null ],
        [ "8.4 Variable names", "page_plugin_code_style_guide.html#section_plugincodestyleguide_variable_names", null ],
        [ "8.5 Member Variables", "page_plugin_code_style_guide.html#section_plugincodestyleguide_member_variables", null ],
        [ "8.6 Type Names", "page_plugin_code_style_guide.html#section_plugincodestyleguide_type_names", null ],
        [ "8.7 Global Variables", "page_plugin_code_style_guide.html#section_plugincodestyleguide_global_variables", null ],
        [ "8.8 Templates", "page_plugin_code_style_guide.html#section_plugincodestyleguide_templates", null ],
        [ "8.9 Pairing", "page_plugin_code_style_guide.html#section_plugincodestyleguide_pairing", null ]
      ] ],
      [ "9. Classes and Parameters", "page_plugin_code_style_guide.html#section_plugincodestyleguide_classes_and_parameters", [
        [ "9.1 Class Layout", "page_plugin_code_style_guide.html#section_plugincodestyleguide_class_layout", null ],
        [ "9.2 Class Accessors", "page_plugin_code_style_guide.html#section_plugincodestyleguide_class_accessors", null ],
        [ "9.3 Class Initialization", "page_plugin_code_style_guide.html#section_plugincodestyleguide_class_initialization", null ],
        [ "9.4 Class Default Initialization", "page_plugin_code_style_guide.html#section_plugincodestyleguide_class_default_initialization", null ],
        [ "9.5 Explicit Constructors", "page_plugin_code_style_guide.html#section_plugincodestyleguide_explicit_constructors", null ],
        [ "9.6 Copy and Assign Operators", "page_plugin_code_style_guide.html#section_plugincodestyleguide_copy_and_assign_operators", null ],
        [ "9.7 Const Parameters", "page_plugin_code_style_guide.html#section_plugincodestyleguide_const_parameters", null ],
        [ "9.8 Overrides", "page_plugin_code_style_guide.html#section_plugincodestyleguide_overrides", null ],
        [ "9.9 Structs", "page_plugin_code_style_guide.html#section_plugincodestyleguide_structs", null ],
        [ "9.10 Input Parameters by Reference", "page_plugin_code_style_guide.html#input_parameters", null ],
        [ "9.11 Member Layout", "page_plugin_code_style_guide.html#section_plugincodestyleguide_member_layout", null ]
      ] ]
    ] ],
    [ "API Structure", "page_api_structure.html", [
      [ "Development Environments", "page_api_structure.html#section_api_structure_developmentenvironments", null ]
    ] ],
    [ "Creating Libraries", "page_creating_libraries.html", [
      [ "Creating a Function Library", "page_creating_libraries.html#section__creating_librarires_creatingafunctionlibrary", null ],
      [ "Creating a Class Library", "page_creating_libraries.html#section__creating_librarires_creatingaclasslibrary", null ]
    ] ],
    [ "Freeze Transformation", "page_freeze_transformation.html", [
      [ "Example", "page_freeze_transformation.html#section_freezetransformation_example", null ],
      [ "Mathematical Background", "page_freeze_transformation.html#section_freezetransformation_mathematicalbackground", null ]
    ] ],
    [ "Move/Copy Constructors", "movecopy.html", [
      [ "Type I", "movecopy.html#c1", null ],
      [ "Type II", "movecopy.html#c2", null ],
      [ "Type III", "movecopy.html#c3", null ]
    ] ],
    [ "New Color Chooser Support", "page_new_color_chooser_support.html", [
      [ "Old Preferences", "page_new_color_chooser_support.html#section_new_color_chooser_support_oldpreferences", null ],
      [ "New Preferences", "page_new_color_chooser_support.html#section_new_color_chooser_support_newpreferences", null ],
      [ "New Flags", "page_new_color_chooser_support.html#section_new_color_chooser_support_newflags", null ],
      [ "Settings", "page_new_color_chooser_support.html#section_new_color_chooser_support_settings", null ],
      [ "New Drag Type", "page_new_color_chooser_support.html#section_new_color_chooser_support_newdragtype", null ]
    ] ]
];