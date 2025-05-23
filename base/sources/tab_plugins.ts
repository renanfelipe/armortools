
function tab_plugins_draw(htab: ui_handle_t) {
	let ui: ui_t = ui_base_ui;
	if (ui_tab(htab, tr("Plugins"))) {

		ui_begin_sticky();

		///if (is_paint || is_sculpt)
		let row: f32[] = [1 / 4];
		ui_row(row);
		///end
		///if is_lab
		let row: f32[] = [1 / 14];
		ui_row(row);
		///end

		if (ui_button(tr("Manager"))) {
			box_preferences_htab.position = 6; // Plugins
			box_preferences_show();
		}
		ui_end_sticky();

		// Draw plugins
		let keys: string[] = map_keys(plugin_map);
		for (let i: i32 = 0; i < keys.length; ++i) {
			let p: plugin_t = map_get(plugin_map, keys[i]);
			if (p.on_ui != null) {
				js_call(p.on_ui);
			}
		}

		///if is_debug
		let rt_keys: string[] = map_keys(render_path_render_targets);
		array_sort(rt_keys, null);
		for (let i: i32 = 0; i < rt_keys.length; ++i) {
			let rt: render_target_t = map_get(render_path_render_targets, rt_keys[i]);
			ui_text(rt_keys[i]);
			_ui_image(rt._image);
		}
		///end
	}
}
