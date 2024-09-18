# `qualityMonitorPluginframework` Submodule <a name="`qualityMonitorPluginframework` Submodule" id="@cdktf/provider-databricks.qualityMonitorPluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QualityMonitorPluginframework <a name="QualityMonitorPluginframework" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework databricks_quality_monitor_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframework(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assets_dir: str,
  output_schema_name: str,
  table_name: str,
  baseline_table_name: str = None,
  custom_metrics: typing.Union[IResolvable, typing.List[QualityMonitorPluginframeworkCustomMetrics]] = None,
  data_classification_config: QualityMonitorPluginframeworkDataClassificationConfig = None,
  inference_log: QualityMonitorPluginframeworkInferenceLog = None,
  latest_monitor_failure_msg: str = None,
  notifications: QualityMonitorPluginframeworkNotifications = None,
  schedule: QualityMonitorPluginframeworkSchedule = None,
  skip_builtin_dashboard: typing.Union[bool, IResolvable] = None,
  slicing_exprs: typing.List[str] = None,
  snapshot: QualityMonitorPluginframeworkSnapshot = None,
  time_series: QualityMonitorPluginframeworkTimeSeries = None,
  warehouse_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.assetsDir">assets_dir</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#assets_dir QualityMonitorPluginframework#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.outputSchemaName">output_schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_schema_name QualityMonitorPluginframework#output_schema_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#table_name QualityMonitorPluginframework#table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.baselineTableName">baseline_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#baseline_table_name QualityMonitorPluginframework#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.customMetrics">custom_metrics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#custom_metrics QualityMonitorPluginframework#custom_metrics}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.dataClassificationConfig">data_classification_config</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#data_classification_config QualityMonitorPluginframework#data_classification_config}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.inferenceLog">inference_log</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#inference_log QualityMonitorPluginframework#inference_log}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.latestMonitorFailureMsg">latest_monitor_failure_msg</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#latest_monitor_failure_msg QualityMonitorPluginframework#latest_monitor_failure_msg}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#notifications QualityMonitorPluginframework#notifications}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#schedule QualityMonitorPluginframework#schedule}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.skipBuiltinDashboard">skip_builtin_dashboard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#skip_builtin_dashboard QualityMonitorPluginframework#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.slicingExprs">slicing_exprs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#slicing_exprs QualityMonitorPluginframework#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#snapshot QualityMonitorPluginframework#snapshot}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.timeSeries">time_series</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#time_series QualityMonitorPluginframework#time_series}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#warehouse_id QualityMonitorPluginframework#warehouse_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assets_dir`<sup>Required</sup> <a name="assets_dir" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.assetsDir"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#assets_dir QualityMonitorPluginframework#assets_dir}.

---

##### `output_schema_name`<sup>Required</sup> <a name="output_schema_name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.outputSchemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_schema_name QualityMonitorPluginframework#output_schema_name}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#table_name QualityMonitorPluginframework#table_name}.

---

##### `baseline_table_name`<sup>Optional</sup> <a name="baseline_table_name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.baselineTableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#baseline_table_name QualityMonitorPluginframework#baseline_table_name}.

---

##### `custom_metrics`<sup>Optional</sup> <a name="custom_metrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.customMetrics"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#custom_metrics QualityMonitorPluginframework#custom_metrics}.

---

##### `data_classification_config`<sup>Optional</sup> <a name="data_classification_config" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.dataClassificationConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#data_classification_config QualityMonitorPluginframework#data_classification_config}.

---

##### `inference_log`<sup>Optional</sup> <a name="inference_log" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.inferenceLog"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#inference_log QualityMonitorPluginframework#inference_log}.

---

##### `latest_monitor_failure_msg`<sup>Optional</sup> <a name="latest_monitor_failure_msg" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.latestMonitorFailureMsg"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#latest_monitor_failure_msg QualityMonitorPluginframework#latest_monitor_failure_msg}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.notifications"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#notifications QualityMonitorPluginframework#notifications}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#schedule QualityMonitorPluginframework#schedule}.

---

##### `skip_builtin_dashboard`<sup>Optional</sup> <a name="skip_builtin_dashboard" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.skipBuiltinDashboard"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#skip_builtin_dashboard QualityMonitorPluginframework#skip_builtin_dashboard}.

---

##### `slicing_exprs`<sup>Optional</sup> <a name="slicing_exprs" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.slicingExprs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#slicing_exprs QualityMonitorPluginframework#slicing_exprs}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.snapshot"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#snapshot QualityMonitorPluginframework#snapshot}.

---

##### `time_series`<sup>Optional</sup> <a name="time_series" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.timeSeries"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#time_series QualityMonitorPluginframework#time_series}.

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.warehouseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#warehouse_id QualityMonitorPluginframework#warehouse_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putCustomMetrics">put_custom_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putDataClassificationConfig">put_data_classification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog">put_inference_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putNotifications">put_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSnapshot">put_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putTimeSeries">put_time_series</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetBaselineTableName">reset_baseline_table_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetCustomMetrics">reset_custom_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetDataClassificationConfig">reset_data_classification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetInferenceLog">reset_inference_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetLatestMonitorFailureMsg">reset_latest_monitor_failure_msg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetNotifications">reset_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSkipBuiltinDashboard">reset_skip_builtin_dashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSlicingExprs">reset_slicing_exprs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSnapshot">reset_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetTimeSeries">reset_time_series</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetWarehouseId">reset_warehouse_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_metrics` <a name="put_custom_metrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putCustomMetrics"></a>

```python
def put_custom_metrics(
  value: typing.Union[IResolvable, typing.List[QualityMonitorPluginframeworkCustomMetrics]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putCustomMetrics.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>]]

---

##### `put_data_classification_config` <a name="put_data_classification_config" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putDataClassificationConfig"></a>

```python
def put_data_classification_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putDataClassificationConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#enabled QualityMonitorPluginframework#enabled}.

---

##### `put_inference_log` <a name="put_inference_log" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog"></a>

```python
def put_inference_log(
  granularities: typing.List[str],
  model_id_col: str,
  prediction_col: str,
  problem_type: str,
  timestamp_col: str,
  label_col: str = None,
  prediction_proba_col: str = None
) -> None
```

###### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog.parameter.granularities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}.

---

###### `model_id_col`<sup>Required</sup> <a name="model_id_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog.parameter.modelIdCol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#model_id_col QualityMonitorPluginframework#model_id_col}.

---

###### `prediction_col`<sup>Required</sup> <a name="prediction_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog.parameter.predictionCol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_col QualityMonitorPluginframework#prediction_col}.

---

###### `problem_type`<sup>Required</sup> <a name="problem_type" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog.parameter.problemType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#problem_type QualityMonitorPluginframework#problem_type}.

---

###### `timestamp_col`<sup>Required</sup> <a name="timestamp_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog.parameter.timestampCol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}.

---

###### `label_col`<sup>Optional</sup> <a name="label_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog.parameter.labelCol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#label_col QualityMonitorPluginframework#label_col}.

---

###### `prediction_proba_col`<sup>Optional</sup> <a name="prediction_proba_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog.parameter.predictionProbaCol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_proba_col QualityMonitorPluginframework#prediction_proba_col}.

---

##### `put_notifications` <a name="put_notifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putNotifications"></a>

```python
def put_notifications(
  on_failure: QualityMonitorPluginframeworkNotificationsOnFailure = None,
  on_new_classification_tag_detected: QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected = None
) -> None
```

###### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putNotifications.parameter.onFailure"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_failure QualityMonitorPluginframework#on_failure}.

---

###### `on_new_classification_tag_detected`<sup>Optional</sup> <a name="on_new_classification_tag_detected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putNotifications.parameter.onNewClassificationTagDetected"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_new_classification_tag_detected QualityMonitorPluginframework#on_new_classification_tag_detected}.

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSchedule"></a>

```python
def put_schedule(
  quartz_cron_expression: str,
  timezone_id: str
) -> None
```

###### `quartz_cron_expression`<sup>Required</sup> <a name="quartz_cron_expression" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSchedule.parameter.quartzCronExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#quartz_cron_expression QualityMonitorPluginframework#quartz_cron_expression}.

---

###### `timezone_id`<sup>Required</sup> <a name="timezone_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSchedule.parameter.timezoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timezone_id QualityMonitorPluginframework#timezone_id}.

---

##### `put_snapshot` <a name="put_snapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSnapshot"></a>

```python
def put_snapshot() -> None
```

##### `put_time_series` <a name="put_time_series" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putTimeSeries"></a>

```python
def put_time_series(
  granularities: typing.List[str],
  timestamp_col: str
) -> None
```

###### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putTimeSeries.parameter.granularities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}.

---

###### `timestamp_col`<sup>Required</sup> <a name="timestamp_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putTimeSeries.parameter.timestampCol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}.

---

##### `reset_baseline_table_name` <a name="reset_baseline_table_name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetBaselineTableName"></a>

```python
def reset_baseline_table_name() -> None
```

##### `reset_custom_metrics` <a name="reset_custom_metrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetCustomMetrics"></a>

```python
def reset_custom_metrics() -> None
```

##### `reset_data_classification_config` <a name="reset_data_classification_config" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetDataClassificationConfig"></a>

```python
def reset_data_classification_config() -> None
```

##### `reset_inference_log` <a name="reset_inference_log" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetInferenceLog"></a>

```python
def reset_inference_log() -> None
```

##### `reset_latest_monitor_failure_msg` <a name="reset_latest_monitor_failure_msg" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetLatestMonitorFailureMsg"></a>

```python
def reset_latest_monitor_failure_msg() -> None
```

##### `reset_notifications` <a name="reset_notifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetNotifications"></a>

```python
def reset_notifications() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_skip_builtin_dashboard` <a name="reset_skip_builtin_dashboard" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSkipBuiltinDashboard"></a>

```python
def reset_skip_builtin_dashboard() -> None
```

##### `reset_slicing_exprs` <a name="reset_slicing_exprs" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSlicingExprs"></a>

```python
def reset_slicing_exprs() -> None
```

##### `reset_snapshot` <a name="reset_snapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSnapshot"></a>

```python
def reset_snapshot() -> None
```

##### `reset_time_series` <a name="reset_time_series" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetTimeSeries"></a>

```python
def reset_time_series() -> None
```

##### `reset_warehouse_id` <a name="reset_warehouse_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetWarehouseId"></a>

```python
def reset_warehouse_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a QualityMonitorPluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframework.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframework.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframework.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframework.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a QualityMonitorPluginframework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QualityMonitorPluginframework to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QualityMonitorPluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QualityMonitorPluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetrics">custom_metrics</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList">QualityMonitorPluginframeworkCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dashboardId">dashboard_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfig">data_classification_config</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference">QualityMonitorPluginframeworkDataClassificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.driftMetricsTableName">drift_metrics_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLog">inference_log</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference">QualityMonitorPluginframeworkInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.monitorVersion">monitor_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference">QualityMonitorPluginframeworkNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.profileMetricsTableName">profile_metrics_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference">QualityMonitorPluginframeworkScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference">QualityMonitorPluginframeworkSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeries">time_series</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference">QualityMonitorPluginframeworkTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDirInput">assets_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableNameInput">baseline_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetricsInput">custom_metrics_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfigInput">data_classification_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLogInput">inference_log_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsgInput">latest_monitor_failure_msg_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notificationsInput">notifications_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaNameInput">output_schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.scheduleInput">schedule_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboardInput">skip_builtin_dashboard_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprsInput">slicing_exprs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshotInput">snapshot_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeriesInput">time_series_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDir">assets_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableName">baseline_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsg">latest_monitor_failure_msg</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaName">output_schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboard">skip_builtin_dashboard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprs">slicing_exprs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_metrics`<sup>Required</sup> <a name="custom_metrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetrics"></a>

```python
custom_metrics: QualityMonitorPluginframeworkCustomMetricsList
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList">QualityMonitorPluginframeworkCustomMetricsList</a>

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dashboardId"></a>

```python
dashboard_id: str
```

- *Type:* str

---

##### `data_classification_config`<sup>Required</sup> <a name="data_classification_config" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfig"></a>

```python
data_classification_config: QualityMonitorPluginframeworkDataClassificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference">QualityMonitorPluginframeworkDataClassificationConfigOutputReference</a>

---

##### `drift_metrics_table_name`<sup>Required</sup> <a name="drift_metrics_table_name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.driftMetricsTableName"></a>

```python
drift_metrics_table_name: str
```

- *Type:* str

---

##### `inference_log`<sup>Required</sup> <a name="inference_log" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLog"></a>

```python
inference_log: QualityMonitorPluginframeworkInferenceLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference">QualityMonitorPluginframeworkInferenceLogOutputReference</a>

---

##### `monitor_version`<sup>Required</sup> <a name="monitor_version" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.monitorVersion"></a>

```python
monitor_version: str
```

- *Type:* str

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notifications"></a>

```python
notifications: QualityMonitorPluginframeworkNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference">QualityMonitorPluginframeworkNotificationsOutputReference</a>

---

##### `profile_metrics_table_name`<sup>Required</sup> <a name="profile_metrics_table_name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.profileMetricsTableName"></a>

```python
profile_metrics_table_name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.schedule"></a>

```python
schedule: QualityMonitorPluginframeworkScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference">QualityMonitorPluginframeworkScheduleOutputReference</a>

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshot"></a>

```python
snapshot: QualityMonitorPluginframeworkSnapshotOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference">QualityMonitorPluginframeworkSnapshotOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_series`<sup>Required</sup> <a name="time_series" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeries"></a>

```python
time_series: QualityMonitorPluginframeworkTimeSeriesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference">QualityMonitorPluginframeworkTimeSeriesOutputReference</a>

---

##### `assets_dir_input`<sup>Optional</sup> <a name="assets_dir_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDirInput"></a>

```python
assets_dir_input: str
```

- *Type:* str

---

##### `baseline_table_name_input`<sup>Optional</sup> <a name="baseline_table_name_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableNameInput"></a>

```python
baseline_table_name_input: str
```

- *Type:* str

---

##### `custom_metrics_input`<sup>Optional</sup> <a name="custom_metrics_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetricsInput"></a>

```python
custom_metrics_input: typing.Union[IResolvable, typing.List[QualityMonitorPluginframeworkCustomMetrics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>]]

---

##### `data_classification_config_input`<sup>Optional</sup> <a name="data_classification_config_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfigInput"></a>

```python
data_classification_config_input: typing.Union[IResolvable, QualityMonitorPluginframeworkDataClassificationConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>]

---

##### `inference_log_input`<sup>Optional</sup> <a name="inference_log_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLogInput"></a>

```python
inference_log_input: typing.Union[IResolvable, QualityMonitorPluginframeworkInferenceLog]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>]

---

##### `latest_monitor_failure_msg_input`<sup>Optional</sup> <a name="latest_monitor_failure_msg_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsgInput"></a>

```python
latest_monitor_failure_msg_input: str
```

- *Type:* str

---

##### `notifications_input`<sup>Optional</sup> <a name="notifications_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notificationsInput"></a>

```python
notifications_input: typing.Union[IResolvable, QualityMonitorPluginframeworkNotifications]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>]

---

##### `output_schema_name_input`<sup>Optional</sup> <a name="output_schema_name_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaNameInput"></a>

```python
output_schema_name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.scheduleInput"></a>

```python
schedule_input: typing.Union[IResolvable, QualityMonitorPluginframeworkSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>]

---

##### `skip_builtin_dashboard_input`<sup>Optional</sup> <a name="skip_builtin_dashboard_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboardInput"></a>

```python
skip_builtin_dashboard_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `slicing_exprs_input`<sup>Optional</sup> <a name="slicing_exprs_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprsInput"></a>

```python
slicing_exprs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_input`<sup>Optional</sup> <a name="snapshot_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshotInput"></a>

```python
snapshot_input: typing.Union[IResolvable, QualityMonitorPluginframeworkSnapshot]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>]

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `time_series_input`<sup>Optional</sup> <a name="time_series_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeriesInput"></a>

```python
time_series_input: typing.Union[IResolvable, QualityMonitorPluginframeworkTimeSeries]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>]

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `assets_dir`<sup>Required</sup> <a name="assets_dir" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDir"></a>

```python
assets_dir: str
```

- *Type:* str

---

##### `baseline_table_name`<sup>Required</sup> <a name="baseline_table_name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableName"></a>

```python
baseline_table_name: str
```

- *Type:* str

---

##### `latest_monitor_failure_msg`<sup>Required</sup> <a name="latest_monitor_failure_msg" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsg"></a>

```python
latest_monitor_failure_msg: str
```

- *Type:* str

---

##### `output_schema_name`<sup>Required</sup> <a name="output_schema_name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaName"></a>

```python
output_schema_name: str
```

- *Type:* str

---

##### `skip_builtin_dashboard`<sup>Required</sup> <a name="skip_builtin_dashboard" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboard"></a>

```python
skip_builtin_dashboard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `slicing_exprs`<sup>Required</sup> <a name="slicing_exprs" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprs"></a>

```python
slicing_exprs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QualityMonitorPluginframeworkConfig <a name="QualityMonitorPluginframeworkConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  assets_dir: str,
  output_schema_name: str,
  table_name: str,
  baseline_table_name: str = None,
  custom_metrics: typing.Union[IResolvable, typing.List[QualityMonitorPluginframeworkCustomMetrics]] = None,
  data_classification_config: QualityMonitorPluginframeworkDataClassificationConfig = None,
  inference_log: QualityMonitorPluginframeworkInferenceLog = None,
  latest_monitor_failure_msg: str = None,
  notifications: QualityMonitorPluginframeworkNotifications = None,
  schedule: QualityMonitorPluginframeworkSchedule = None,
  skip_builtin_dashboard: typing.Union[bool, IResolvable] = None,
  slicing_exprs: typing.List[str] = None,
  snapshot: QualityMonitorPluginframeworkSnapshot = None,
  time_series: QualityMonitorPluginframeworkTimeSeries = None,
  warehouse_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.assetsDir">assets_dir</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#assets_dir QualityMonitorPluginframework#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.outputSchemaName">output_schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_schema_name QualityMonitorPluginframework#output_schema_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#table_name QualityMonitorPluginframework#table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.baselineTableName">baseline_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#baseline_table_name QualityMonitorPluginframework#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.customMetrics">custom_metrics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#custom_metrics QualityMonitorPluginframework#custom_metrics}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dataClassificationConfig">data_classification_config</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#data_classification_config QualityMonitorPluginframework#data_classification_config}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.inferenceLog">inference_log</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#inference_log QualityMonitorPluginframework#inference_log}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.latestMonitorFailureMsg">latest_monitor_failure_msg</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#latest_monitor_failure_msg QualityMonitorPluginframework#latest_monitor_failure_msg}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#notifications QualityMonitorPluginframework#notifications}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#schedule QualityMonitorPluginframework#schedule}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.skipBuiltinDashboard">skip_builtin_dashboard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#skip_builtin_dashboard QualityMonitorPluginframework#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.slicingExprs">slicing_exprs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#slicing_exprs QualityMonitorPluginframework#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#snapshot QualityMonitorPluginframework#snapshot}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.timeSeries">time_series</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#time_series QualityMonitorPluginframework#time_series}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#warehouse_id QualityMonitorPluginframework#warehouse_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assets_dir`<sup>Required</sup> <a name="assets_dir" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.assetsDir"></a>

```python
assets_dir: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#assets_dir QualityMonitorPluginframework#assets_dir}.

---

##### `output_schema_name`<sup>Required</sup> <a name="output_schema_name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.outputSchemaName"></a>

```python
output_schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_schema_name QualityMonitorPluginframework#output_schema_name}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#table_name QualityMonitorPluginframework#table_name}.

---

##### `baseline_table_name`<sup>Optional</sup> <a name="baseline_table_name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.baselineTableName"></a>

```python
baseline_table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#baseline_table_name QualityMonitorPluginframework#baseline_table_name}.

---

##### `custom_metrics`<sup>Optional</sup> <a name="custom_metrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.customMetrics"></a>

```python
custom_metrics: typing.Union[IResolvable, typing.List[QualityMonitorPluginframeworkCustomMetrics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#custom_metrics QualityMonitorPluginframework#custom_metrics}.

---

##### `data_classification_config`<sup>Optional</sup> <a name="data_classification_config" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dataClassificationConfig"></a>

```python
data_classification_config: QualityMonitorPluginframeworkDataClassificationConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#data_classification_config QualityMonitorPluginframework#data_classification_config}.

---

##### `inference_log`<sup>Optional</sup> <a name="inference_log" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.inferenceLog"></a>

```python
inference_log: QualityMonitorPluginframeworkInferenceLog
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#inference_log QualityMonitorPluginframework#inference_log}.

---

##### `latest_monitor_failure_msg`<sup>Optional</sup> <a name="latest_monitor_failure_msg" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.latestMonitorFailureMsg"></a>

```python
latest_monitor_failure_msg: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#latest_monitor_failure_msg QualityMonitorPluginframework#latest_monitor_failure_msg}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.notifications"></a>

```python
notifications: QualityMonitorPluginframeworkNotifications
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#notifications QualityMonitorPluginframework#notifications}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.schedule"></a>

```python
schedule: QualityMonitorPluginframeworkSchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#schedule QualityMonitorPluginframework#schedule}.

---

##### `skip_builtin_dashboard`<sup>Optional</sup> <a name="skip_builtin_dashboard" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.skipBuiltinDashboard"></a>

```python
skip_builtin_dashboard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#skip_builtin_dashboard QualityMonitorPluginframework#skip_builtin_dashboard}.

---

##### `slicing_exprs`<sup>Optional</sup> <a name="slicing_exprs" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.slicingExprs"></a>

```python
slicing_exprs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#slicing_exprs QualityMonitorPluginframework#slicing_exprs}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.snapshot"></a>

```python
snapshot: QualityMonitorPluginframeworkSnapshot
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#snapshot QualityMonitorPluginframework#snapshot}.

---

##### `time_series`<sup>Optional</sup> <a name="time_series" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.timeSeries"></a>

```python
time_series: QualityMonitorPluginframeworkTimeSeries
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#time_series QualityMonitorPluginframework#time_series}.

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#warehouse_id QualityMonitorPluginframework#warehouse_id}.

---

### QualityMonitorPluginframeworkCustomMetrics <a name="QualityMonitorPluginframeworkCustomMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics(
  definition: str,
  input_columns: typing.List[str],
  name: str,
  output_data_type: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.definition">definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#definition QualityMonitorPluginframework#definition}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.inputColumns">input_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#input_columns QualityMonitorPluginframework#input_columns}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#name QualityMonitorPluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.outputDataType">output_data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_data_type QualityMonitorPluginframework#output_data_type}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#type QualityMonitorPluginframework#type}. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.definition"></a>

```python
definition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#definition QualityMonitorPluginframework#definition}.

---

##### `input_columns`<sup>Required</sup> <a name="input_columns" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.inputColumns"></a>

```python
input_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#input_columns QualityMonitorPluginframework#input_columns}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#name QualityMonitorPluginframework#name}.

---

##### `output_data_type`<sup>Required</sup> <a name="output_data_type" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.outputDataType"></a>

```python
output_data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_data_type QualityMonitorPluginframework#output_data_type}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#type QualityMonitorPluginframework#type}.

---

### QualityMonitorPluginframeworkDataClassificationConfig <a name="QualityMonitorPluginframeworkDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#enabled QualityMonitorPluginframework#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#enabled QualityMonitorPluginframework#enabled}.

---

### QualityMonitorPluginframeworkInferenceLog <a name="QualityMonitorPluginframeworkInferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog(
  granularities: typing.List[str],
  model_id_col: str,
  prediction_col: str,
  problem_type: str,
  timestamp_col: str,
  label_col: str = None,
  prediction_proba_col: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.modelIdCol">model_id_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#model_id_col QualityMonitorPluginframework#model_id_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionCol">prediction_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_col QualityMonitorPluginframework#prediction_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.problemType">problem_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#problem_type QualityMonitorPluginframework#problem_type}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.timestampCol">timestamp_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.labelCol">label_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#label_col QualityMonitorPluginframework#label_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionProbaCol">prediction_proba_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_proba_col QualityMonitorPluginframework#prediction_proba_col}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}.

---

##### `model_id_col`<sup>Required</sup> <a name="model_id_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.modelIdCol"></a>

```python
model_id_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#model_id_col QualityMonitorPluginframework#model_id_col}.

---

##### `prediction_col`<sup>Required</sup> <a name="prediction_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionCol"></a>

```python
prediction_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_col QualityMonitorPluginframework#prediction_col}.

---

##### `problem_type`<sup>Required</sup> <a name="problem_type" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.problemType"></a>

```python
problem_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#problem_type QualityMonitorPluginframework#problem_type}.

---

##### `timestamp_col`<sup>Required</sup> <a name="timestamp_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.timestampCol"></a>

```python
timestamp_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}.

---

##### `label_col`<sup>Optional</sup> <a name="label_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.labelCol"></a>

```python
label_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#label_col QualityMonitorPluginframework#label_col}.

---

##### `prediction_proba_col`<sup>Optional</sup> <a name="prediction_proba_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionProbaCol"></a>

```python
prediction_proba_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_proba_col QualityMonitorPluginframework#prediction_proba_col}.

---

### QualityMonitorPluginframeworkNotifications <a name="QualityMonitorPluginframeworkNotifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications(
  on_failure: QualityMonitorPluginframeworkNotificationsOnFailure = None,
  on_new_classification_tag_detected: QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onFailure">on_failure</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_failure QualityMonitorPluginframework#on_failure}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onNewClassificationTagDetected">on_new_classification_tag_detected</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_new_classification_tag_detected QualityMonitorPluginframework#on_new_classification_tag_detected}. |

---

##### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onFailure"></a>

```python
on_failure: QualityMonitorPluginframeworkNotificationsOnFailure
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_failure QualityMonitorPluginframework#on_failure}.

---

##### `on_new_classification_tag_detected`<sup>Optional</sup> <a name="on_new_classification_tag_detected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onNewClassificationTagDetected"></a>

```python
on_new_classification_tag_detected: QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_new_classification_tag_detected QualityMonitorPluginframework#on_new_classification_tag_detected}.

---

### QualityMonitorPluginframeworkNotificationsOnFailure <a name="QualityMonitorPluginframeworkNotificationsOnFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure(
  email_addresses: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}. |

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}.

---

### QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected <a name="QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected(
  email_addresses: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}. |

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}.

---

### QualityMonitorPluginframeworkSchedule <a name="QualityMonitorPluginframeworkSchedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule(
  quartz_cron_expression: str,
  timezone_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.quartzCronExpression">quartz_cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#quartz_cron_expression QualityMonitorPluginframework#quartz_cron_expression}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.timezoneId">timezone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timezone_id QualityMonitorPluginframework#timezone_id}. |

---

##### `quartz_cron_expression`<sup>Required</sup> <a name="quartz_cron_expression" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.quartzCronExpression"></a>

```python
quartz_cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#quartz_cron_expression QualityMonitorPluginframework#quartz_cron_expression}.

---

##### `timezone_id`<sup>Required</sup> <a name="timezone_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.timezoneId"></a>

```python
timezone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timezone_id QualityMonitorPluginframework#timezone_id}.

---

### QualityMonitorPluginframeworkSnapshot <a name="QualityMonitorPluginframeworkSnapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot()
```


### QualityMonitorPluginframeworkTimeSeries <a name="QualityMonitorPluginframeworkTimeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries(
  granularities: typing.List[str],
  timestamp_col: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.timestampCol">timestamp_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}.

---

##### `timestamp_col`<sup>Required</sup> <a name="timestamp_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.timestampCol"></a>

```python
timestamp_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}.

---

## Classes <a name="Classes" id="Classes"></a>

### QualityMonitorPluginframeworkCustomMetricsList <a name="QualityMonitorPluginframeworkCustomMetricsList" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QualityMonitorPluginframeworkCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[QualityMonitorPluginframeworkCustomMetrics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>]]

---


### QualityMonitorPluginframeworkCustomMetricsOutputReference <a name="QualityMonitorPluginframeworkCustomMetricsOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definitionInput">definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumnsInput">input_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataTypeInput">output_data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definition">definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumns">input_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataType">output_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definitionInput"></a>

```python
definition_input: str
```

- *Type:* str

---

##### `input_columns_input`<sup>Optional</sup> <a name="input_columns_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumnsInput"></a>

```python
input_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_data_type_input`<sup>Optional</sup> <a name="output_data_type_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```python
output_data_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definition"></a>

```python
definition: str
```

- *Type:* str

---

##### `input_columns`<sup>Required</sup> <a name="input_columns" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumns"></a>

```python
input_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_data_type`<sup>Required</sup> <a name="output_data_type" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataType"></a>

```python
output_data_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QualityMonitorPluginframeworkCustomMetrics]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>]

---


### QualityMonitorPluginframeworkDataClassificationConfigOutputReference <a name="QualityMonitorPluginframeworkDataClassificationConfigOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QualityMonitorPluginframeworkDataClassificationConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>]

---


### QualityMonitorPluginframeworkInferenceLogOutputReference <a name="QualityMonitorPluginframeworkInferenceLogOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetLabelCol">reset_label_col</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetPredictionProbaCol">reset_prediction_proba_col</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_label_col` <a name="reset_label_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetLabelCol"></a>

```python
def reset_label_col() -> None
```

##### `reset_prediction_proba_col` <a name="reset_prediction_proba_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetPredictionProbaCol"></a>

```python
def reset_prediction_proba_col() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularitiesInput">granularities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelColInput">label_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdColInput">model_id_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionColInput">prediction_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaColInput">prediction_proba_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemTypeInput">problem_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampColInput">timestamp_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelCol">label_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdCol">model_id_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionCol">prediction_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaCol">prediction_proba_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemType">problem_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampCol">timestamp_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `granularities_input`<sup>Optional</sup> <a name="granularities_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularitiesInput"></a>

```python
granularities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label_col_input`<sup>Optional</sup> <a name="label_col_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelColInput"></a>

```python
label_col_input: str
```

- *Type:* str

---

##### `model_id_col_input`<sup>Optional</sup> <a name="model_id_col_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdColInput"></a>

```python
model_id_col_input: str
```

- *Type:* str

---

##### `prediction_col_input`<sup>Optional</sup> <a name="prediction_col_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionColInput"></a>

```python
prediction_col_input: str
```

- *Type:* str

---

##### `prediction_proba_col_input`<sup>Optional</sup> <a name="prediction_proba_col_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaColInput"></a>

```python
prediction_proba_col_input: str
```

- *Type:* str

---

##### `problem_type_input`<sup>Optional</sup> <a name="problem_type_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemTypeInput"></a>

```python
problem_type_input: str
```

- *Type:* str

---

##### `timestamp_col_input`<sup>Optional</sup> <a name="timestamp_col_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampColInput"></a>

```python
timestamp_col_input: str
```

- *Type:* str

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label_col`<sup>Required</sup> <a name="label_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelCol"></a>

```python
label_col: str
```

- *Type:* str

---

##### `model_id_col`<sup>Required</sup> <a name="model_id_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdCol"></a>

```python
model_id_col: str
```

- *Type:* str

---

##### `prediction_col`<sup>Required</sup> <a name="prediction_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionCol"></a>

```python
prediction_col: str
```

- *Type:* str

---

##### `prediction_proba_col`<sup>Required</sup> <a name="prediction_proba_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaCol"></a>

```python
prediction_proba_col: str
```

- *Type:* str

---

##### `problem_type`<sup>Required</sup> <a name="problem_type" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemType"></a>

```python
problem_type: str
```

- *Type:* str

---

##### `timestamp_col`<sup>Required</sup> <a name="timestamp_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampCol"></a>

```python
timestamp_col: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QualityMonitorPluginframeworkInferenceLog]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>]

---


### QualityMonitorPluginframeworkNotificationsOnFailureOutputReference <a name="QualityMonitorPluginframeworkNotificationsOnFailureOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resetEmailAddresses">reset_email_addresses</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_addresses` <a name="reset_email_addresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resetEmailAddresses"></a>

```python
def reset_email_addresses() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddressesInput">email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_addresses_input`<sup>Optional</sup> <a name="email_addresses_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddressesInput"></a>

```python
email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QualityMonitorPluginframeworkNotificationsOnFailure]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>]

---


### QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference <a name="QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses">reset_email_addresses</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_addresses` <a name="reset_email_addresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses"></a>

```python
def reset_email_addresses() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput">email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_addresses_input`<sup>Optional</sup> <a name="email_addresses_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput"></a>

```python
email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>]

---


### QualityMonitorPluginframeworkNotificationsOutputReference <a name="QualityMonitorPluginframeworkNotificationsOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnFailure">put_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnNewClassificationTagDetected">put_on_new_classification_tag_detected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnFailure">reset_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnNewClassificationTagDetected">reset_on_new_classification_tag_detected</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_failure` <a name="put_on_failure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnFailure"></a>

```python
def put_on_failure(
  email_addresses: typing.List[str] = None
) -> None
```

###### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnFailure.parameter.emailAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}.

---

##### `put_on_new_classification_tag_detected` <a name="put_on_new_classification_tag_detected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnNewClassificationTagDetected"></a>

```python
def put_on_new_classification_tag_detected(
  email_addresses: typing.List[str] = None
) -> None
```

###### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnNewClassificationTagDetected.parameter.emailAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}.

---

##### `reset_on_failure` <a name="reset_on_failure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnFailure"></a>

```python
def reset_on_failure() -> None
```

##### `reset_on_new_classification_tag_detected` <a name="reset_on_new_classification_tag_detected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnNewClassificationTagDetected"></a>

```python
def reset_on_new_classification_tag_detected() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailure">on_failure</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference">QualityMonitorPluginframeworkNotificationsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetected">on_new_classification_tag_detected</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailureInput">on_failure_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetectedInput">on_new_classification_tag_detected_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_failure`<sup>Required</sup> <a name="on_failure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailure"></a>

```python
on_failure: QualityMonitorPluginframeworkNotificationsOnFailureOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference">QualityMonitorPluginframeworkNotificationsOnFailureOutputReference</a>

---

##### `on_new_classification_tag_detected`<sup>Required</sup> <a name="on_new_classification_tag_detected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetected"></a>

```python
on_new_classification_tag_detected: QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference</a>

---

##### `on_failure_input`<sup>Optional</sup> <a name="on_failure_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailureInput"></a>

```python
on_failure_input: typing.Union[IResolvable, QualityMonitorPluginframeworkNotificationsOnFailure]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>]

---

##### `on_new_classification_tag_detected_input`<sup>Optional</sup> <a name="on_new_classification_tag_detected_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetectedInput"></a>

```python
on_new_classification_tag_detected_input: typing.Union[IResolvable, QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QualityMonitorPluginframeworkNotifications]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>]

---


### QualityMonitorPluginframeworkScheduleOutputReference <a name="QualityMonitorPluginframeworkScheduleOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.pauseStatus">pause_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpressionInput">quartz_cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneIdInput">timezone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpression">quartz_cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneId">timezone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pause_status`<sup>Required</sup> <a name="pause_status" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.pauseStatus"></a>

```python
pause_status: str
```

- *Type:* str

---

##### `quartz_cron_expression_input`<sup>Optional</sup> <a name="quartz_cron_expression_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpressionInput"></a>

```python
quartz_cron_expression_input: str
```

- *Type:* str

---

##### `timezone_id_input`<sup>Optional</sup> <a name="timezone_id_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneIdInput"></a>

```python
timezone_id_input: str
```

- *Type:* str

---

##### `quartz_cron_expression`<sup>Required</sup> <a name="quartz_cron_expression" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpression"></a>

```python
quartz_cron_expression: str
```

- *Type:* str

---

##### `timezone_id`<sup>Required</sup> <a name="timezone_id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneId"></a>

```python
timezone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QualityMonitorPluginframeworkSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>]

---


### QualityMonitorPluginframeworkSnapshotOutputReference <a name="QualityMonitorPluginframeworkSnapshotOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QualityMonitorPluginframeworkSnapshot]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>]

---


### QualityMonitorPluginframeworkTimeSeriesOutputReference <a name="QualityMonitorPluginframeworkTimeSeriesOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import quality_monitor_pluginframework

qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularitiesInput">granularities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampColInput">timestamp_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampCol">timestamp_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `granularities_input`<sup>Optional</sup> <a name="granularities_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularitiesInput"></a>

```python
granularities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timestamp_col_input`<sup>Optional</sup> <a name="timestamp_col_input" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampColInput"></a>

```python
timestamp_col_input: str
```

- *Type:* str

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timestamp_col`<sup>Required</sup> <a name="timestamp_col" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampCol"></a>

```python
timestamp_col: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QualityMonitorPluginframeworkTimeSeries]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>]

---



