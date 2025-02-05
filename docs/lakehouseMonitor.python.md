# `lakehouseMonitor` Submodule <a name="`lakehouseMonitor` Submodule" id="@cdktf/provider-databricks.lakehouseMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakehouseMonitor <a name="LakehouseMonitor" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor databricks_lakehouse_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitor(
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
  custom_metrics: typing.Union[IResolvable, typing.List[LakehouseMonitorCustomMetrics]] = None,
  data_classification_config: LakehouseMonitorDataClassificationConfig = None,
  id: str = None,
  inference_log: LakehouseMonitorInferenceLog = None,
  latest_monitor_failure_msg: str = None,
  notifications: LakehouseMonitorNotifications = None,
  schedule: LakehouseMonitorSchedule = None,
  skip_builtin_dashboard: typing.Union[bool, IResolvable] = None,
  slicing_exprs: typing.List[str] = None,
  snapshot: LakehouseMonitorSnapshot = None,
  timeouts: LakehouseMonitorTimeouts = None,
  time_series: LakehouseMonitorTimeSeries = None,
  warehouse_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.assetsDir">assets_dir</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#assets_dir LakehouseMonitor#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.outputSchemaName">output_schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#output_schema_name LakehouseMonitor#output_schema_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#table_name LakehouseMonitor#table_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.baselineTableName">baseline_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#baseline_table_name LakehouseMonitor#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.customMetrics">custom_metrics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>]]</code> | custom_metrics block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.dataClassificationConfig">data_classification_config</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a></code> | data_classification_config block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#id LakehouseMonitor#id}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.inferenceLog">inference_log</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a></code> | inference_log block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.latestMonitorFailureMsg">latest_monitor_failure_msg</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#latest_monitor_failure_msg LakehouseMonitor#latest_monitor_failure_msg}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a></code> | notifications block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.skipBuiltinDashboard">skip_builtin_dashboard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#skip_builtin_dashboard LakehouseMonitor#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.slicingExprs">slicing_exprs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#slicing_exprs LakehouseMonitor#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a></code> | snapshot block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.timeSeries">time_series</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a></code> | time_series block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#warehouse_id LakehouseMonitor#warehouse_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assets_dir`<sup>Required</sup> <a name="assets_dir" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.assetsDir"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#assets_dir LakehouseMonitor#assets_dir}.

---

##### `output_schema_name`<sup>Required</sup> <a name="output_schema_name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.outputSchemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#output_schema_name LakehouseMonitor#output_schema_name}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#table_name LakehouseMonitor#table_name}.

---

##### `baseline_table_name`<sup>Optional</sup> <a name="baseline_table_name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.baselineTableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#baseline_table_name LakehouseMonitor#baseline_table_name}.

---

##### `custom_metrics`<sup>Optional</sup> <a name="custom_metrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.customMetrics"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>]]

custom_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#custom_metrics LakehouseMonitor#custom_metrics}

---

##### `data_classification_config`<sup>Optional</sup> <a name="data_classification_config" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.dataClassificationConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

data_classification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#data_classification_config LakehouseMonitor#data_classification_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#id LakehouseMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inference_log`<sup>Optional</sup> <a name="inference_log" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.inferenceLog"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

inference_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#inference_log LakehouseMonitor#inference_log}

---

##### `latest_monitor_failure_msg`<sup>Optional</sup> <a name="latest_monitor_failure_msg" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.latestMonitorFailureMsg"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#latest_monitor_failure_msg LakehouseMonitor#latest_monitor_failure_msg}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.notifications"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#notifications LakehouseMonitor#notifications}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#schedule LakehouseMonitor#schedule}

---

##### `skip_builtin_dashboard`<sup>Optional</sup> <a name="skip_builtin_dashboard" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.skipBuiltinDashboard"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#skip_builtin_dashboard LakehouseMonitor#skip_builtin_dashboard}.

---

##### `slicing_exprs`<sup>Optional</sup> <a name="slicing_exprs" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.slicingExprs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#slicing_exprs LakehouseMonitor#slicing_exprs}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.snapshot"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

snapshot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#snapshot LakehouseMonitor#snapshot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#timeouts LakehouseMonitor#timeouts}

---

##### `time_series`<sup>Optional</sup> <a name="time_series" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.timeSeries"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

time_series block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#time_series LakehouseMonitor#time_series}

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.warehouseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#warehouse_id LakehouseMonitor#warehouse_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putCustomMetrics">put_custom_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putDataClassificationConfig">put_data_classification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog">put_inference_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putNotifications">put_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSnapshot">put_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeSeries">put_time_series</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetBaselineTableName">reset_baseline_table_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetCustomMetrics">reset_custom_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetDataClassificationConfig">reset_data_classification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetInferenceLog">reset_inference_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetLatestMonitorFailureMsg">reset_latest_monitor_failure_msg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetNotifications">reset_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSkipBuiltinDashboard">reset_skip_builtin_dashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSlicingExprs">reset_slicing_exprs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSnapshot">reset_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeSeries">reset_time_series</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetWarehouseId">reset_warehouse_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_metrics` <a name="put_custom_metrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putCustomMetrics"></a>

```python
def put_custom_metrics(
  value: typing.Union[IResolvable, typing.List[LakehouseMonitorCustomMetrics]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putCustomMetrics.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>]]

---

##### `put_data_classification_config` <a name="put_data_classification_config" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putDataClassificationConfig"></a>

```python
def put_data_classification_config(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putDataClassificationConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#enabled LakehouseMonitor#enabled}.

---

##### `put_inference_log` <a name="put_inference_log" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog"></a>

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

###### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog.parameter.granularities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}.

---

###### `model_id_col`<sup>Required</sup> <a name="model_id_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog.parameter.modelIdCol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#model_id_col LakehouseMonitor#model_id_col}.

---

###### `prediction_col`<sup>Required</sup> <a name="prediction_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog.parameter.predictionCol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#prediction_col LakehouseMonitor#prediction_col}.

---

###### `problem_type`<sup>Required</sup> <a name="problem_type" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog.parameter.problemType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#problem_type LakehouseMonitor#problem_type}.

---

###### `timestamp_col`<sup>Required</sup> <a name="timestamp_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog.parameter.timestampCol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}.

---

###### `label_col`<sup>Optional</sup> <a name="label_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog.parameter.labelCol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#label_col LakehouseMonitor#label_col}.

---

###### `prediction_proba_col`<sup>Optional</sup> <a name="prediction_proba_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog.parameter.predictionProbaCol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#prediction_proba_col LakehouseMonitor#prediction_proba_col}.

---

##### `put_notifications` <a name="put_notifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putNotifications"></a>

```python
def put_notifications(
  on_failure: LakehouseMonitorNotificationsOnFailure = None,
  on_new_classification_tag_detected: LakehouseMonitorNotificationsOnNewClassificationTagDetected = None
) -> None
```

###### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putNotifications.parameter.onFailure"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#on_failure LakehouseMonitor#on_failure}

---

###### `on_new_classification_tag_detected`<sup>Optional</sup> <a name="on_new_classification_tag_detected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putNotifications.parameter.onNewClassificationTagDetected"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

on_new_classification_tag_detected block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#on_new_classification_tag_detected LakehouseMonitor#on_new_classification_tag_detected}

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSchedule"></a>

```python
def put_schedule(
  quartz_cron_expression: str,
  timezone_id: str
) -> None
```

###### `quartz_cron_expression`<sup>Required</sup> <a name="quartz_cron_expression" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSchedule.parameter.quartzCronExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#quartz_cron_expression LakehouseMonitor#quartz_cron_expression}.

---

###### `timezone_id`<sup>Required</sup> <a name="timezone_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSchedule.parameter.timezoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#timezone_id LakehouseMonitor#timezone_id}.

---

##### `put_snapshot` <a name="put_snapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSnapshot"></a>

```python
def put_snapshot() -> None
```

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#create LakehouseMonitor#create}.

---

##### `put_time_series` <a name="put_time_series" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeSeries"></a>

```python
def put_time_series(
  granularities: typing.List[str],
  timestamp_col: str
) -> None
```

###### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeSeries.parameter.granularities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}.

---

###### `timestamp_col`<sup>Required</sup> <a name="timestamp_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeSeries.parameter.timestampCol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}.

---

##### `reset_baseline_table_name` <a name="reset_baseline_table_name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetBaselineTableName"></a>

```python
def reset_baseline_table_name() -> None
```

##### `reset_custom_metrics` <a name="reset_custom_metrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetCustomMetrics"></a>

```python
def reset_custom_metrics() -> None
```

##### `reset_data_classification_config` <a name="reset_data_classification_config" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetDataClassificationConfig"></a>

```python
def reset_data_classification_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inference_log` <a name="reset_inference_log" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetInferenceLog"></a>

```python
def reset_inference_log() -> None
```

##### `reset_latest_monitor_failure_msg` <a name="reset_latest_monitor_failure_msg" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetLatestMonitorFailureMsg"></a>

```python
def reset_latest_monitor_failure_msg() -> None
```

##### `reset_notifications` <a name="reset_notifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetNotifications"></a>

```python
def reset_notifications() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_skip_builtin_dashboard` <a name="reset_skip_builtin_dashboard" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSkipBuiltinDashboard"></a>

```python
def reset_skip_builtin_dashboard() -> None
```

##### `reset_slicing_exprs` <a name="reset_slicing_exprs" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSlicingExprs"></a>

```python
def reset_slicing_exprs() -> None
```

##### `reset_snapshot` <a name="reset_snapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSnapshot"></a>

```python
def reset_snapshot() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_series` <a name="reset_time_series" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeSeries"></a>

```python
def reset_time_series() -> None
```

##### `reset_warehouse_id` <a name="reset_warehouse_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetWarehouseId"></a>

```python
def reset_warehouse_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LakehouseMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LakehouseMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LakehouseMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LakehouseMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LakehouseMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetrics">custom_metrics</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList">LakehouseMonitorCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dashboardId">dashboard_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfig">data_classification_config</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference">LakehouseMonitorDataClassificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.driftMetricsTableName">drift_metrics_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLog">inference_log</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference">LakehouseMonitorInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.monitorVersion">monitor_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference">LakehouseMonitorNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.profileMetricsTableName">profile_metrics_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference">LakehouseMonitorScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference">LakehouseMonitorSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference">LakehouseMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeries">time_series</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference">LakehouseMonitorTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDirInput">assets_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableNameInput">baseline_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetricsInput">custom_metrics_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfigInput">data_classification_config_input</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLogInput">inference_log_input</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsgInput">latest_monitor_failure_msg_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notificationsInput">notifications_input</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaNameInput">output_schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboardInput">skip_builtin_dashboard_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprsInput">slicing_exprs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshotInput">snapshot_input</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeriesInput">time_series_input</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDir">assets_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableName">baseline_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsg">latest_monitor_failure_msg</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaName">output_schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboard">skip_builtin_dashboard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprs">slicing_exprs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_metrics`<sup>Required</sup> <a name="custom_metrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetrics"></a>

```python
custom_metrics: LakehouseMonitorCustomMetricsList
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList">LakehouseMonitorCustomMetricsList</a>

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dashboardId"></a>

```python
dashboard_id: str
```

- *Type:* str

---

##### `data_classification_config`<sup>Required</sup> <a name="data_classification_config" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfig"></a>

```python
data_classification_config: LakehouseMonitorDataClassificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference">LakehouseMonitorDataClassificationConfigOutputReference</a>

---

##### `drift_metrics_table_name`<sup>Required</sup> <a name="drift_metrics_table_name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.driftMetricsTableName"></a>

```python
drift_metrics_table_name: str
```

- *Type:* str

---

##### `inference_log`<sup>Required</sup> <a name="inference_log" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLog"></a>

```python
inference_log: LakehouseMonitorInferenceLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference">LakehouseMonitorInferenceLogOutputReference</a>

---

##### `monitor_version`<sup>Required</sup> <a name="monitor_version" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.monitorVersion"></a>

```python
monitor_version: str
```

- *Type:* str

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notifications"></a>

```python
notifications: LakehouseMonitorNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference">LakehouseMonitorNotificationsOutputReference</a>

---

##### `profile_metrics_table_name`<sup>Required</sup> <a name="profile_metrics_table_name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.profileMetricsTableName"></a>

```python
profile_metrics_table_name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.schedule"></a>

```python
schedule: LakehouseMonitorScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference">LakehouseMonitorScheduleOutputReference</a>

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshot"></a>

```python
snapshot: LakehouseMonitorSnapshotOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference">LakehouseMonitorSnapshotOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeouts"></a>

```python
timeouts: LakehouseMonitorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference">LakehouseMonitorTimeoutsOutputReference</a>

---

##### `time_series`<sup>Required</sup> <a name="time_series" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeries"></a>

```python
time_series: LakehouseMonitorTimeSeriesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference">LakehouseMonitorTimeSeriesOutputReference</a>

---

##### `assets_dir_input`<sup>Optional</sup> <a name="assets_dir_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDirInput"></a>

```python
assets_dir_input: str
```

- *Type:* str

---

##### `baseline_table_name_input`<sup>Optional</sup> <a name="baseline_table_name_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableNameInput"></a>

```python
baseline_table_name_input: str
```

- *Type:* str

---

##### `custom_metrics_input`<sup>Optional</sup> <a name="custom_metrics_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetricsInput"></a>

```python
custom_metrics_input: typing.Union[IResolvable, typing.List[LakehouseMonitorCustomMetrics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>]]

---

##### `data_classification_config_input`<sup>Optional</sup> <a name="data_classification_config_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfigInput"></a>

```python
data_classification_config_input: LakehouseMonitorDataClassificationConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inference_log_input`<sup>Optional</sup> <a name="inference_log_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLogInput"></a>

```python
inference_log_input: LakehouseMonitorInferenceLog
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

---

##### `latest_monitor_failure_msg_input`<sup>Optional</sup> <a name="latest_monitor_failure_msg_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsgInput"></a>

```python
latest_monitor_failure_msg_input: str
```

- *Type:* str

---

##### `notifications_input`<sup>Optional</sup> <a name="notifications_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notificationsInput"></a>

```python
notifications_input: LakehouseMonitorNotifications
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

---

##### `output_schema_name_input`<sup>Optional</sup> <a name="output_schema_name_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaNameInput"></a>

```python
output_schema_name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.scheduleInput"></a>

```python
schedule_input: LakehouseMonitorSchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

---

##### `skip_builtin_dashboard_input`<sup>Optional</sup> <a name="skip_builtin_dashboard_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboardInput"></a>

```python
skip_builtin_dashboard_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `slicing_exprs_input`<sup>Optional</sup> <a name="slicing_exprs_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprsInput"></a>

```python
slicing_exprs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_input`<sup>Optional</sup> <a name="snapshot_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshotInput"></a>

```python
snapshot_input: LakehouseMonitorSnapshot
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LakehouseMonitorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>]

---

##### `time_series_input`<sup>Optional</sup> <a name="time_series_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeriesInput"></a>

```python
time_series_input: LakehouseMonitorTimeSeries
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `assets_dir`<sup>Required</sup> <a name="assets_dir" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDir"></a>

```python
assets_dir: str
```

- *Type:* str

---

##### `baseline_table_name`<sup>Required</sup> <a name="baseline_table_name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableName"></a>

```python
baseline_table_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `latest_monitor_failure_msg`<sup>Required</sup> <a name="latest_monitor_failure_msg" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsg"></a>

```python
latest_monitor_failure_msg: str
```

- *Type:* str

---

##### `output_schema_name`<sup>Required</sup> <a name="output_schema_name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaName"></a>

```python
output_schema_name: str
```

- *Type:* str

---

##### `skip_builtin_dashboard`<sup>Required</sup> <a name="skip_builtin_dashboard" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboard"></a>

```python
skip_builtin_dashboard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `slicing_exprs`<sup>Required</sup> <a name="slicing_exprs" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprs"></a>

```python
slicing_exprs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LakehouseMonitorConfig <a name="LakehouseMonitorConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorConfig(
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
  custom_metrics: typing.Union[IResolvable, typing.List[LakehouseMonitorCustomMetrics]] = None,
  data_classification_config: LakehouseMonitorDataClassificationConfig = None,
  id: str = None,
  inference_log: LakehouseMonitorInferenceLog = None,
  latest_monitor_failure_msg: str = None,
  notifications: LakehouseMonitorNotifications = None,
  schedule: LakehouseMonitorSchedule = None,
  skip_builtin_dashboard: typing.Union[bool, IResolvable] = None,
  slicing_exprs: typing.List[str] = None,
  snapshot: LakehouseMonitorSnapshot = None,
  timeouts: LakehouseMonitorTimeouts = None,
  time_series: LakehouseMonitorTimeSeries = None,
  warehouse_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.assetsDir">assets_dir</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#assets_dir LakehouseMonitor#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.outputSchemaName">output_schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#output_schema_name LakehouseMonitor#output_schema_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#table_name LakehouseMonitor#table_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.baselineTableName">baseline_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#baseline_table_name LakehouseMonitor#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.customMetrics">custom_metrics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>]]</code> | custom_metrics block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dataClassificationConfig">data_classification_config</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a></code> | data_classification_config block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#id LakehouseMonitor#id}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.inferenceLog">inference_log</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a></code> | inference_log block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.latestMonitorFailureMsg">latest_monitor_failure_msg</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#latest_monitor_failure_msg LakehouseMonitor#latest_monitor_failure_msg}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a></code> | notifications block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.skipBuiltinDashboard">skip_builtin_dashboard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#skip_builtin_dashboard LakehouseMonitor#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.slicingExprs">slicing_exprs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#slicing_exprs LakehouseMonitor#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a></code> | snapshot block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeSeries">time_series</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a></code> | time_series block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#warehouse_id LakehouseMonitor#warehouse_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assets_dir`<sup>Required</sup> <a name="assets_dir" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.assetsDir"></a>

```python
assets_dir: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#assets_dir LakehouseMonitor#assets_dir}.

---

##### `output_schema_name`<sup>Required</sup> <a name="output_schema_name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.outputSchemaName"></a>

```python
output_schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#output_schema_name LakehouseMonitor#output_schema_name}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#table_name LakehouseMonitor#table_name}.

---

##### `baseline_table_name`<sup>Optional</sup> <a name="baseline_table_name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.baselineTableName"></a>

```python
baseline_table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#baseline_table_name LakehouseMonitor#baseline_table_name}.

---

##### `custom_metrics`<sup>Optional</sup> <a name="custom_metrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.customMetrics"></a>

```python
custom_metrics: typing.Union[IResolvable, typing.List[LakehouseMonitorCustomMetrics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>]]

custom_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#custom_metrics LakehouseMonitor#custom_metrics}

---

##### `data_classification_config`<sup>Optional</sup> <a name="data_classification_config" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dataClassificationConfig"></a>

```python
data_classification_config: LakehouseMonitorDataClassificationConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

data_classification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#data_classification_config LakehouseMonitor#data_classification_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#id LakehouseMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inference_log`<sup>Optional</sup> <a name="inference_log" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.inferenceLog"></a>

```python
inference_log: LakehouseMonitorInferenceLog
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

inference_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#inference_log LakehouseMonitor#inference_log}

---

##### `latest_monitor_failure_msg`<sup>Optional</sup> <a name="latest_monitor_failure_msg" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.latestMonitorFailureMsg"></a>

```python
latest_monitor_failure_msg: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#latest_monitor_failure_msg LakehouseMonitor#latest_monitor_failure_msg}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.notifications"></a>

```python
notifications: LakehouseMonitorNotifications
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#notifications LakehouseMonitor#notifications}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.schedule"></a>

```python
schedule: LakehouseMonitorSchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#schedule LakehouseMonitor#schedule}

---

##### `skip_builtin_dashboard`<sup>Optional</sup> <a name="skip_builtin_dashboard" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.skipBuiltinDashboard"></a>

```python
skip_builtin_dashboard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#skip_builtin_dashboard LakehouseMonitor#skip_builtin_dashboard}.

---

##### `slicing_exprs`<sup>Optional</sup> <a name="slicing_exprs" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.slicingExprs"></a>

```python
slicing_exprs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#slicing_exprs LakehouseMonitor#slicing_exprs}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.snapshot"></a>

```python
snapshot: LakehouseMonitorSnapshot
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

snapshot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#snapshot LakehouseMonitor#snapshot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeouts"></a>

```python
timeouts: LakehouseMonitorTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#timeouts LakehouseMonitor#timeouts}

---

##### `time_series`<sup>Optional</sup> <a name="time_series" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeSeries"></a>

```python
time_series: LakehouseMonitorTimeSeries
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

time_series block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#time_series LakehouseMonitor#time_series}

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#warehouse_id LakehouseMonitor#warehouse_id}.

---

### LakehouseMonitorCustomMetrics <a name="LakehouseMonitorCustomMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorCustomMetrics(
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
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.definition">definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#definition LakehouseMonitor#definition}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.inputColumns">input_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#input_columns LakehouseMonitor#input_columns}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#name LakehouseMonitor#name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.outputDataType">output_data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#output_data_type LakehouseMonitor#output_data_type}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#type LakehouseMonitor#type}. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.definition"></a>

```python
definition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#definition LakehouseMonitor#definition}.

---

##### `input_columns`<sup>Required</sup> <a name="input_columns" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.inputColumns"></a>

```python
input_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#input_columns LakehouseMonitor#input_columns}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#name LakehouseMonitor#name}.

---

##### `output_data_type`<sup>Required</sup> <a name="output_data_type" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.outputDataType"></a>

```python
output_data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#output_data_type LakehouseMonitor#output_data_type}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#type LakehouseMonitor#type}.

---

### LakehouseMonitorDataClassificationConfig <a name="LakehouseMonitorDataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorDataClassificationConfig(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#enabled LakehouseMonitor#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#enabled LakehouseMonitor#enabled}.

---

### LakehouseMonitorInferenceLog <a name="LakehouseMonitorInferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorInferenceLog(
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
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.modelIdCol">model_id_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#model_id_col LakehouseMonitor#model_id_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionCol">prediction_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#prediction_col LakehouseMonitor#prediction_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.problemType">problem_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#problem_type LakehouseMonitor#problem_type}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.timestampCol">timestamp_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.labelCol">label_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#label_col LakehouseMonitor#label_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionProbaCol">prediction_proba_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#prediction_proba_col LakehouseMonitor#prediction_proba_col}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}.

---

##### `model_id_col`<sup>Required</sup> <a name="model_id_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.modelIdCol"></a>

```python
model_id_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#model_id_col LakehouseMonitor#model_id_col}.

---

##### `prediction_col`<sup>Required</sup> <a name="prediction_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionCol"></a>

```python
prediction_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#prediction_col LakehouseMonitor#prediction_col}.

---

##### `problem_type`<sup>Required</sup> <a name="problem_type" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.problemType"></a>

```python
problem_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#problem_type LakehouseMonitor#problem_type}.

---

##### `timestamp_col`<sup>Required</sup> <a name="timestamp_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.timestampCol"></a>

```python
timestamp_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}.

---

##### `label_col`<sup>Optional</sup> <a name="label_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.labelCol"></a>

```python
label_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#label_col LakehouseMonitor#label_col}.

---

##### `prediction_proba_col`<sup>Optional</sup> <a name="prediction_proba_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionProbaCol"></a>

```python
prediction_proba_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#prediction_proba_col LakehouseMonitor#prediction_proba_col}.

---

### LakehouseMonitorNotifications <a name="LakehouseMonitorNotifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorNotifications(
  on_failure: LakehouseMonitorNotificationsOnFailure = None,
  on_new_classification_tag_detected: LakehouseMonitorNotificationsOnNewClassificationTagDetected = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onFailure">on_failure</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a></code> | on_failure block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onNewClassificationTagDetected">on_new_classification_tag_detected</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a></code> | on_new_classification_tag_detected block. |

---

##### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onFailure"></a>

```python
on_failure: LakehouseMonitorNotificationsOnFailure
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#on_failure LakehouseMonitor#on_failure}

---

##### `on_new_classification_tag_detected`<sup>Optional</sup> <a name="on_new_classification_tag_detected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onNewClassificationTagDetected"></a>

```python
on_new_classification_tag_detected: LakehouseMonitorNotificationsOnNewClassificationTagDetected
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

on_new_classification_tag_detected block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#on_new_classification_tag_detected LakehouseMonitor#on_new_classification_tag_detected}

---

### LakehouseMonitorNotificationsOnFailure <a name="LakehouseMonitorNotificationsOnFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorNotificationsOnFailure(
  email_addresses: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}. |

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}.

---

### LakehouseMonitorNotificationsOnNewClassificationTagDetected <a name="LakehouseMonitorNotificationsOnNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected(
  email_addresses: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}. |

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}.

---

### LakehouseMonitorSchedule <a name="LakehouseMonitorSchedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorSchedule(
  quartz_cron_expression: str,
  timezone_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.quartzCronExpression">quartz_cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#quartz_cron_expression LakehouseMonitor#quartz_cron_expression}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.timezoneId">timezone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#timezone_id LakehouseMonitor#timezone_id}. |

---

##### `quartz_cron_expression`<sup>Required</sup> <a name="quartz_cron_expression" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.quartzCronExpression"></a>

```python
quartz_cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#quartz_cron_expression LakehouseMonitor#quartz_cron_expression}.

---

##### `timezone_id`<sup>Required</sup> <a name="timezone_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.timezoneId"></a>

```python
timezone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#timezone_id LakehouseMonitor#timezone_id}.

---

### LakehouseMonitorSnapshot <a name="LakehouseMonitorSnapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorSnapshot()
```


### LakehouseMonitorTimeouts <a name="LakehouseMonitorTimeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#create LakehouseMonitor#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#create LakehouseMonitor#create}.

---

### LakehouseMonitorTimeSeries <a name="LakehouseMonitorTimeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorTimeSeries(
  granularities: typing.List[str],
  timestamp_col: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.timestampCol">timestamp_col</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}.

---

##### `timestamp_col`<sup>Required</sup> <a name="timestamp_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.timestampCol"></a>

```python
timestamp_col: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakehouseMonitorCustomMetricsList <a name="LakehouseMonitorCustomMetricsList" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorCustomMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakehouseMonitorCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakehouseMonitorCustomMetrics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>]]

---


### LakehouseMonitorCustomMetricsOutputReference <a name="LakehouseMonitorCustomMetricsOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definitionInput">definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumnsInput">input_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataTypeInput">output_data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definition">definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumns">input_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataType">output_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definitionInput"></a>

```python
definition_input: str
```

- *Type:* str

---

##### `input_columns_input`<sup>Optional</sup> <a name="input_columns_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumnsInput"></a>

```python
input_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_data_type_input`<sup>Optional</sup> <a name="output_data_type_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```python
output_data_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definition"></a>

```python
definition: str
```

- *Type:* str

---

##### `input_columns`<sup>Required</sup> <a name="input_columns" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumns"></a>

```python
input_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_data_type`<sup>Required</sup> <a name="output_data_type" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataType"></a>

```python
output_data_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakehouseMonitorCustomMetrics]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>]

---


### LakehouseMonitorDataClassificationConfigOutputReference <a name="LakehouseMonitorDataClassificationConfigOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.internalValue"></a>

```python
internal_value: LakehouseMonitorDataClassificationConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

---


### LakehouseMonitorInferenceLogOutputReference <a name="LakehouseMonitorInferenceLogOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetLabelCol">reset_label_col</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetPredictionProbaCol">reset_prediction_proba_col</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_label_col` <a name="reset_label_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetLabelCol"></a>

```python
def reset_label_col() -> None
```

##### `reset_prediction_proba_col` <a name="reset_prediction_proba_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetPredictionProbaCol"></a>

```python
def reset_prediction_proba_col() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularitiesInput">granularities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelColInput">label_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdColInput">model_id_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionColInput">prediction_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaColInput">prediction_proba_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemTypeInput">problem_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampColInput">timestamp_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelCol">label_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdCol">model_id_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionCol">prediction_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaCol">prediction_proba_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemType">problem_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampCol">timestamp_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `granularities_input`<sup>Optional</sup> <a name="granularities_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularitiesInput"></a>

```python
granularities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label_col_input`<sup>Optional</sup> <a name="label_col_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelColInput"></a>

```python
label_col_input: str
```

- *Type:* str

---

##### `model_id_col_input`<sup>Optional</sup> <a name="model_id_col_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdColInput"></a>

```python
model_id_col_input: str
```

- *Type:* str

---

##### `prediction_col_input`<sup>Optional</sup> <a name="prediction_col_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionColInput"></a>

```python
prediction_col_input: str
```

- *Type:* str

---

##### `prediction_proba_col_input`<sup>Optional</sup> <a name="prediction_proba_col_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaColInput"></a>

```python
prediction_proba_col_input: str
```

- *Type:* str

---

##### `problem_type_input`<sup>Optional</sup> <a name="problem_type_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemTypeInput"></a>

```python
problem_type_input: str
```

- *Type:* str

---

##### `timestamp_col_input`<sup>Optional</sup> <a name="timestamp_col_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampColInput"></a>

```python
timestamp_col_input: str
```

- *Type:* str

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label_col`<sup>Required</sup> <a name="label_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelCol"></a>

```python
label_col: str
```

- *Type:* str

---

##### `model_id_col`<sup>Required</sup> <a name="model_id_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdCol"></a>

```python
model_id_col: str
```

- *Type:* str

---

##### `prediction_col`<sup>Required</sup> <a name="prediction_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionCol"></a>

```python
prediction_col: str
```

- *Type:* str

---

##### `prediction_proba_col`<sup>Required</sup> <a name="prediction_proba_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaCol"></a>

```python
prediction_proba_col: str
```

- *Type:* str

---

##### `problem_type`<sup>Required</sup> <a name="problem_type" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemType"></a>

```python
problem_type: str
```

- *Type:* str

---

##### `timestamp_col`<sup>Required</sup> <a name="timestamp_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampCol"></a>

```python
timestamp_col: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.internalValue"></a>

```python
internal_value: LakehouseMonitorInferenceLog
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

---


### LakehouseMonitorNotificationsOnFailureOutputReference <a name="LakehouseMonitorNotificationsOnFailureOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resetEmailAddresses">reset_email_addresses</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_addresses` <a name="reset_email_addresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resetEmailAddresses"></a>

```python
def reset_email_addresses() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddressesInput">email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_addresses_input`<sup>Optional</sup> <a name="email_addresses_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddressesInput"></a>

```python
email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.internalValue"></a>

```python
internal_value: LakehouseMonitorNotificationsOnFailure
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

---


### LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference <a name="LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses">reset_email_addresses</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_addresses` <a name="reset_email_addresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses"></a>

```python
def reset_email_addresses() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput">email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_addresses_input`<sup>Optional</sup> <a name="email_addresses_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput"></a>

```python
email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue"></a>

```python
internal_value: LakehouseMonitorNotificationsOnNewClassificationTagDetected
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

---


### LakehouseMonitorNotificationsOutputReference <a name="LakehouseMonitorNotificationsOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnFailure">put_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnNewClassificationTagDetected">put_on_new_classification_tag_detected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnFailure">reset_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnNewClassificationTagDetected">reset_on_new_classification_tag_detected</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_failure` <a name="put_on_failure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnFailure"></a>

```python
def put_on_failure(
  email_addresses: typing.List[str] = None
) -> None
```

###### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnFailure.parameter.emailAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}.

---

##### `put_on_new_classification_tag_detected` <a name="put_on_new_classification_tag_detected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnNewClassificationTagDetected"></a>

```python
def put_on_new_classification_tag_detected(
  email_addresses: typing.List[str] = None
) -> None
```

###### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnNewClassificationTagDetected.parameter.emailAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}.

---

##### `reset_on_failure` <a name="reset_on_failure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnFailure"></a>

```python
def reset_on_failure() -> None
```

##### `reset_on_new_classification_tag_detected` <a name="reset_on_new_classification_tag_detected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnNewClassificationTagDetected"></a>

```python
def reset_on_new_classification_tag_detected() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailure">on_failure</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference">LakehouseMonitorNotificationsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetected">on_new_classification_tag_detected</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference">LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailureInput">on_failure_input</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetectedInput">on_new_classification_tag_detected_input</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_failure`<sup>Required</sup> <a name="on_failure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailure"></a>

```python
on_failure: LakehouseMonitorNotificationsOnFailureOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference">LakehouseMonitorNotificationsOnFailureOutputReference</a>

---

##### `on_new_classification_tag_detected`<sup>Required</sup> <a name="on_new_classification_tag_detected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetected"></a>

```python
on_new_classification_tag_detected: LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference">LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference</a>

---

##### `on_failure_input`<sup>Optional</sup> <a name="on_failure_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailureInput"></a>

```python
on_failure_input: LakehouseMonitorNotificationsOnFailure
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

---

##### `on_new_classification_tag_detected_input`<sup>Optional</sup> <a name="on_new_classification_tag_detected_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetectedInput"></a>

```python
on_new_classification_tag_detected_input: LakehouseMonitorNotificationsOnNewClassificationTagDetected
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: LakehouseMonitorNotifications
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

---


### LakehouseMonitorScheduleOutputReference <a name="LakehouseMonitorScheduleOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.pauseStatus">pause_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpressionInput">quartz_cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneIdInput">timezone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpression">quartz_cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneId">timezone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pause_status`<sup>Required</sup> <a name="pause_status" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.pauseStatus"></a>

```python
pause_status: str
```

- *Type:* str

---

##### `quartz_cron_expression_input`<sup>Optional</sup> <a name="quartz_cron_expression_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpressionInput"></a>

```python
quartz_cron_expression_input: str
```

- *Type:* str

---

##### `timezone_id_input`<sup>Optional</sup> <a name="timezone_id_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneIdInput"></a>

```python
timezone_id_input: str
```

- *Type:* str

---

##### `quartz_cron_expression`<sup>Required</sup> <a name="quartz_cron_expression" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpression"></a>

```python
quartz_cron_expression: str
```

- *Type:* str

---

##### `timezone_id`<sup>Required</sup> <a name="timezone_id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneId"></a>

```python
timezone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.internalValue"></a>

```python
internal_value: LakehouseMonitorSchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

---


### LakehouseMonitorSnapshotOutputReference <a name="LakehouseMonitorSnapshotOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: LakehouseMonitorSnapshot
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

---


### LakehouseMonitorTimeoutsOutputReference <a name="LakehouseMonitorTimeoutsOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakehouseMonitorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>]

---


### LakehouseMonitorTimeSeriesOutputReference <a name="LakehouseMonitorTimeSeriesOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import lakehouse_monitor

lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularitiesInput">granularities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampColInput">timestamp_col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularities">granularities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampCol">timestamp_col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `granularities_input`<sup>Optional</sup> <a name="granularities_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularitiesInput"></a>

```python
granularities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timestamp_col_input`<sup>Optional</sup> <a name="timestamp_col_input" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampColInput"></a>

```python
timestamp_col_input: str
```

- *Type:* str

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularities"></a>

```python
granularities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timestamp_col`<sup>Required</sup> <a name="timestamp_col" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampCol"></a>

```python
timestamp_col: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.internalValue"></a>

```python
internal_value: LakehouseMonitorTimeSeries
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

---



