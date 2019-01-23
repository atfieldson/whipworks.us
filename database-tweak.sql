ALTER TABLE bullwhips
ADD CONSTRAINT c_bullwhip_lengths_id FOREIGN KEY (whip_length_id) REFERENCES whip_lengths (id);

ALTER TABLE bullwhips
ADD CONSTRAINT c_handle_length_id FOREIGN KEY (handle_length_id) REFERENCES handle_lengths (id);

ALTER TABLE bullwhips
ADD CONSTRAINT c_color1_id FOREIGN KEY (color1_id) REFERENCES colors (id);

ALTER TABLE bullwhips
ADD CONSTRAINT c_color2_id FOREIGN KEY (color2_id) REFERENCES colors (id);

ALTER TABLE bullwhips
ADD CONSTRAINT c_handle_design_id FOREIGN KEY (handle_design_id) REFERENCES handle_designs (id);

ALTER TABLE bullwhips
ADD CONSTRAINT c_concho_id FOREIGN KEY (concho_id) REFERENCES conchos_and_pommels (id);
