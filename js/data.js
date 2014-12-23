
(function() {

    var home = jQuery.extend({}, IW_Page, {
        alias: 'home',
        type: IW_CONSTANTS.HOME,
        titleBigText: [
            'Помічник вибору діаграмм:',
            'Що переважає у вашій діаграммі? '
        ],
        choices: [
            numbers_s,
            texts_s
        ]
    });

    // ===============================================

    IW_Pages = {
        'home': home,

        'numbers_s': numbers_s,

        'texts_s': texts_s,
        'texts_list_d': texts_list_d,
        'texts_structure_s': texts_structure_s,
        'texts_reason_result_s': texts_reason_result_s,
        'texts_structure_chain_s': texts_structure_chain_s,
        'texts_structure_hierarchy_s': texts_structure_hierarchy_s,
        'texts_structure_parts_s': texts_structure_parts_s,
        'texts_structure_chain_long_d': texts_structure_chain_long_d,
        'texts_structure_chain_wide_d': texts_structure_chain_wide_d,
        'texts_structure_hierarchy_simple_s': texts_structure_hierarchy_simple_s,
        'texts_structure_hierarchy_complex_d': texts_structure_hierarchy_complex_d,
        'texts_structure_hierarchy_simple_box_d': texts_structure_hierarchy_simple_box_d,
        'texts_structure_hierarchy_simple_pyramid_d': texts_structure_hierarchy_simple_pyramid_d,
        'texts_structure_parts_puzzle_d': texts_structure_parts_puzzle_d,
        'texts_structure_parts_circle_d': texts_structure_parts_circle_d,
        'texts_reason_result_crater_d': texts_reason_result_crater_d,
        'texts_reason_result_timing_d': texts_reason_result_timing_d,

        'numbers_changes_in_time_s': numbers_changes_in_time_s,
        'numbers_parts_s': numbers_parts_s,
        'numbers_comparison_s': numbers_comparison_s,
        'numbers_changes_in_time_crater_d': numbers_changes_in_time_crater_d,
        'numbers_changes_in_time_timing_d': numbers_changes_in_time_timing_d,
        'numbers_changes_in_time_parameters_amount_s': numbers_changes_in_time_parameters_amount_s,
        'numbers_changes_in_time_parameters_amount_4_plus_s': numbers_changes_in_time_parameters_amount_4_plus_s,
        'numbers_changes_in_time_parameters_amount_1_s': numbers_changes_in_time_parameters_amount_1_s,
        'numbers_changes_in_time_parameters_amount_2_3_s': numbers_changes_in_time_parameters_amount_2_3_s,
        'numbers_changes_in_time_parameters_amount_1_linear_d': numbers_changes_in_time_parameters_amount_1_linear_d,
        'numbers_changes_in_time_parameters_amount_1_bar_d': numbers_changes_in_time_parameters_amount_1_bar_d,
        'numbers_changes_in_time_parameters_amount_2_3_histogram_d': numbers_changes_in_time_parameters_amount_2_3_histogram_d,
        'numbers_changes_in_time_parameters_amount_2_3_graphic_d': numbers_changes_in_time_parameters_amount_2_3_graphic_d,
        'numbers_parts_percents_d': numbers_parts_percents_d,
        'numbers_parts_pie_d': numbers_parts_pie_d,
        'numbers_parts_pie_with_precision_d': numbers_parts_pie_with_precision_d,
        'numbers_comparison_amount_1_s': numbers_comparison_amount_1_s,
        'numbers_comparison_amount_2_3_s': numbers_comparison_amount_2_3_s,
        'numbers_comparison_amount_4_plus_s': numbers_comparison_amount_4_plus_s,
        'numbers_comparison_amount_1_comparison_s': numbers_comparison_amount_1_comparison_s,
        'numbers_comparison_amount_1_crater_d': numbers_comparison_amount_1_crater_d,
        'numbers_comparison_amount_1_comparison_bar_d': numbers_comparison_amount_1_comparison_bar_d,
        'numbers_comparison_amount_1_comparison_short_titles_s': numbers_comparison_amount_1_comparison_short_titles_s,
        'numbers_comparison_amount_1_comparison_short_titles_histogram_d': numbers_comparison_amount_1_comparison_short_titles_histogram_d,
        'numbers_comparison_amount_1_comparison_short_titles_linear_d': numbers_comparison_amount_1_comparison_short_titles_linear_d,
        'numbers_comparison_amount_1_comparison_short_titles_20_plus_d': numbers_comparison_amount_1_comparison_short_titles_20_plus_d,
        'numbers_comparison_amount_2_3_histogram_d': numbers_comparison_amount_2_3_histogram_d,
        'numbers_comparison_amount_2_3_linear_d': numbers_comparison_amount_2_3_linear_d,
        'numbers_comparison_amount_2_3_too_much_d': numbers_comparison_amount_2_3_too_much_d,
        'numbers_comparison_amount_4_plus_bar_d': numbers_comparison_amount_4_plus_bar_d,
        'numbers_comparison_amount_4_plus_too_much_s': numbers_comparison_amount_4_plus_too_much_s
    };
})();