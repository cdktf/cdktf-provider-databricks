# `qualityMonitorPluginframework` Submodule <a name="`qualityMonitorPluginframework` Submodule" id="@cdktf/provider-databricks.qualityMonitorPluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QualityMonitorPluginframework <a name="QualityMonitorPluginframework" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework databricks_quality_monitor_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframework;

QualityMonitorPluginframework.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .assetsDir(java.lang.String)
    .outputSchemaName(java.lang.String)
    .tableName(java.lang.String)
//  .baselineTableName(java.lang.String)
//  .customMetrics(IResolvable)
//  .customMetrics(java.util.List<QualityMonitorPluginframeworkCustomMetrics>)
//  .dataClassificationConfig(QualityMonitorPluginframeworkDataClassificationConfig)
//  .inferenceLog(QualityMonitorPluginframeworkInferenceLog)
//  .latestMonitorFailureMsg(java.lang.String)
//  .notifications(QualityMonitorPluginframeworkNotifications)
//  .schedule(QualityMonitorPluginframeworkSchedule)
//  .skipBuiltinDashboard(java.lang.Boolean)
//  .skipBuiltinDashboard(IResolvable)
//  .slicingExprs(java.util.List<java.lang.String>)
//  .snapshot(QualityMonitorPluginframeworkSnapshot)
//  .timeSeries(QualityMonitorPluginframeworkTimeSeries)
//  .warehouseId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.assetsDir">assetsDir</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#assets_dir QualityMonitorPluginframework#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.outputSchemaName">outputSchemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_schema_name QualityMonitorPluginframework#output_schema_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#table_name QualityMonitorPluginframework#table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.baselineTableName">baselineTableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#baseline_table_name QualityMonitorPluginframework#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.customMetrics">customMetrics</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#custom_metrics QualityMonitorPluginframework#custom_metrics}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.dataClassificationConfig">dataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#data_classification_config QualityMonitorPluginframework#data_classification_config}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#inference_log QualityMonitorPluginframework#inference_log}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.latestMonitorFailureMsg">latestMonitorFailureMsg</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#latest_monitor_failure_msg QualityMonitorPluginframework#latest_monitor_failure_msg}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#notifications QualityMonitorPluginframework#notifications}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#schedule QualityMonitorPluginframework#schedule}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#skip_builtin_dashboard QualityMonitorPluginframework#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.slicingExprs">slicingExprs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#slicing_exprs QualityMonitorPluginframework#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#snapshot QualityMonitorPluginframework#snapshot}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.timeSeries">timeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#time_series QualityMonitorPluginframework#time_series}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#warehouse_id QualityMonitorPluginframework#warehouse_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetsDir`<sup>Required</sup> <a name="assetsDir" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.assetsDir"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#assets_dir QualityMonitorPluginframework#assets_dir}.

---

##### `outputSchemaName`<sup>Required</sup> <a name="outputSchemaName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.outputSchemaName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_schema_name QualityMonitorPluginframework#output_schema_name}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.tableName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#table_name QualityMonitorPluginframework#table_name}.

---

##### `baselineTableName`<sup>Optional</sup> <a name="baselineTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.baselineTableName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#baseline_table_name QualityMonitorPluginframework#baseline_table_name}.

---

##### `customMetrics`<sup>Optional</sup> <a name="customMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.customMetrics"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#custom_metrics QualityMonitorPluginframework#custom_metrics}.

---

##### `dataClassificationConfig`<sup>Optional</sup> <a name="dataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.dataClassificationConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#data_classification_config QualityMonitorPluginframework#data_classification_config}.

---

##### `inferenceLog`<sup>Optional</sup> <a name="inferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.inferenceLog"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#inference_log QualityMonitorPluginframework#inference_log}.

---

##### `latestMonitorFailureMsg`<sup>Optional</sup> <a name="latestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.latestMonitorFailureMsg"></a>

- *Type:* java.lang.String

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

##### `skipBuiltinDashboard`<sup>Optional</sup> <a name="skipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.skipBuiltinDashboard"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#skip_builtin_dashboard QualityMonitorPluginframework#skip_builtin_dashboard}.

---

##### `slicingExprs`<sup>Optional</sup> <a name="slicingExprs" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.slicingExprs"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#slicing_exprs QualityMonitorPluginframework#slicing_exprs}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.snapshot"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#snapshot QualityMonitorPluginframework#snapshot}.

---

##### `timeSeries`<sup>Optional</sup> <a name="timeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.timeSeries"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#time_series QualityMonitorPluginframework#time_series}.

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.warehouseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#warehouse_id QualityMonitorPluginframework#warehouse_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putCustomMetrics">putCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putDataClassificationConfig">putDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog">putInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putNotifications">putNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSnapshot">putSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putTimeSeries">putTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetBaselineTableName">resetBaselineTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetCustomMetrics">resetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetDataClassificationConfig">resetDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetInferenceLog">resetInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetLatestMonitorFailureMsg">resetLatestMonitorFailureMsg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetNotifications">resetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSkipBuiltinDashboard">resetSkipBuiltinDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSlicingExprs">resetSlicingExprs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSnapshot">resetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetTimeSeries">resetTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetWarehouseId">resetWarehouseId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomMetrics` <a name="putCustomMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putCustomMetrics"></a>

```java
public void putCustomMetrics(IResolvable OR java.util.List<QualityMonitorPluginframeworkCustomMetrics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putCustomMetrics.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>>

---

##### `putDataClassificationConfig` <a name="putDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putDataClassificationConfig"></a>

```java
public void putDataClassificationConfig(QualityMonitorPluginframeworkDataClassificationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putDataClassificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>

---

##### `putInferenceLog` <a name="putInferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog"></a>

```java
public void putInferenceLog(QualityMonitorPluginframeworkInferenceLog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>

---

##### `putNotifications` <a name="putNotifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putNotifications"></a>

```java
public void putNotifications(QualityMonitorPluginframeworkNotifications value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSchedule"></a>

```java
public void putSchedule(QualityMonitorPluginframeworkSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>

---

##### `putSnapshot` <a name="putSnapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSnapshot"></a>

```java
public void putSnapshot(QualityMonitorPluginframeworkSnapshot value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>

---

##### `putTimeSeries` <a name="putTimeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putTimeSeries"></a>

```java
public void putTimeSeries(QualityMonitorPluginframeworkTimeSeries value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putTimeSeries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>

---

##### `resetBaselineTableName` <a name="resetBaselineTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetBaselineTableName"></a>

```java
public void resetBaselineTableName()
```

##### `resetCustomMetrics` <a name="resetCustomMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetCustomMetrics"></a>

```java
public void resetCustomMetrics()
```

##### `resetDataClassificationConfig` <a name="resetDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetDataClassificationConfig"></a>

```java
public void resetDataClassificationConfig()
```

##### `resetInferenceLog` <a name="resetInferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetInferenceLog"></a>

```java
public void resetInferenceLog()
```

##### `resetLatestMonitorFailureMsg` <a name="resetLatestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetLatestMonitorFailureMsg"></a>

```java
public void resetLatestMonitorFailureMsg()
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetNotifications"></a>

```java
public void resetNotifications()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetSkipBuiltinDashboard` <a name="resetSkipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSkipBuiltinDashboard"></a>

```java
public void resetSkipBuiltinDashboard()
```

##### `resetSlicingExprs` <a name="resetSlicingExprs" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSlicingExprs"></a>

```java
public void resetSlicingExprs()
```

##### `resetSnapshot` <a name="resetSnapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSnapshot"></a>

```java
public void resetSnapshot()
```

##### `resetTimeSeries` <a name="resetTimeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetTimeSeries"></a>

```java
public void resetTimeSeries()
```

##### `resetWarehouseId` <a name="resetWarehouseId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetWarehouseId"></a>

```java
public void resetWarehouseId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QualityMonitorPluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframework;

QualityMonitorPluginframework.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframework;

QualityMonitorPluginframework.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframework;

QualityMonitorPluginframework.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframework;

QualityMonitorPluginframework.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QualityMonitorPluginframework.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a QualityMonitorPluginframework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QualityMonitorPluginframework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QualityMonitorPluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the QualityMonitorPluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetrics">customMetrics</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList">QualityMonitorPluginframeworkCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfig">dataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference">QualityMonitorPluginframeworkDataClassificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.driftMetricsTableName">driftMetricsTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference">QualityMonitorPluginframeworkInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.monitorVersion">monitorVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference">QualityMonitorPluginframeworkNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.profileMetricsTableName">profileMetricsTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference">QualityMonitorPluginframeworkScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference">QualityMonitorPluginframeworkSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeries">timeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference">QualityMonitorPluginframeworkTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDirInput">assetsDirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableNameInput">baselineTableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetricsInput">customMetricsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfigInput">dataClassificationConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLogInput">inferenceLogInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsgInput">latestMonitorFailureMsgInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notificationsInput">notificationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaNameInput">outputSchemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.scheduleInput">scheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboardInput">skipBuiltinDashboardInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprsInput">slicingExprsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshotInput">snapshotInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeriesInput">timeSeriesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseIdInput">warehouseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDir">assetsDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableName">baselineTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsg">latestMonitorFailureMsg</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaName">outputSchemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprs">slicingExprs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customMetrics`<sup>Required</sup> <a name="customMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetrics"></a>

```java
public QualityMonitorPluginframeworkCustomMetricsList getCustomMetrics();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList">QualityMonitorPluginframeworkCustomMetricsList</a>

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dashboardId"></a>

```java
public java.lang.String getDashboardId();
```

- *Type:* java.lang.String

---

##### `dataClassificationConfig`<sup>Required</sup> <a name="dataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfig"></a>

```java
public QualityMonitorPluginframeworkDataClassificationConfigOutputReference getDataClassificationConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference">QualityMonitorPluginframeworkDataClassificationConfigOutputReference</a>

---

##### `driftMetricsTableName`<sup>Required</sup> <a name="driftMetricsTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.driftMetricsTableName"></a>

```java
public java.lang.String getDriftMetricsTableName();
```

- *Type:* java.lang.String

---

##### `inferenceLog`<sup>Required</sup> <a name="inferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLog"></a>

```java
public QualityMonitorPluginframeworkInferenceLogOutputReference getInferenceLog();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference">QualityMonitorPluginframeworkInferenceLogOutputReference</a>

---

##### `monitorVersion`<sup>Required</sup> <a name="monitorVersion" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.monitorVersion"></a>

```java
public java.lang.String getMonitorVersion();
```

- *Type:* java.lang.String

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notifications"></a>

```java
public QualityMonitorPluginframeworkNotificationsOutputReference getNotifications();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference">QualityMonitorPluginframeworkNotificationsOutputReference</a>

---

##### `profileMetricsTableName`<sup>Required</sup> <a name="profileMetricsTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.profileMetricsTableName"></a>

```java
public java.lang.String getProfileMetricsTableName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.schedule"></a>

```java
public QualityMonitorPluginframeworkScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference">QualityMonitorPluginframeworkScheduleOutputReference</a>

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshot"></a>

```java
public QualityMonitorPluginframeworkSnapshotOutputReference getSnapshot();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference">QualityMonitorPluginframeworkSnapshotOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeSeries`<sup>Required</sup> <a name="timeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeries"></a>

```java
public QualityMonitorPluginframeworkTimeSeriesOutputReference getTimeSeries();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference">QualityMonitorPluginframeworkTimeSeriesOutputReference</a>

---

##### `assetsDirInput`<sup>Optional</sup> <a name="assetsDirInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDirInput"></a>

```java
public java.lang.String getAssetsDirInput();
```

- *Type:* java.lang.String

---

##### `baselineTableNameInput`<sup>Optional</sup> <a name="baselineTableNameInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableNameInput"></a>

```java
public java.lang.String getBaselineTableNameInput();
```

- *Type:* java.lang.String

---

##### `customMetricsInput`<sup>Optional</sup> <a name="customMetricsInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetricsInput"></a>

```java
public java.lang.Object getCustomMetricsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>>

---

##### `dataClassificationConfigInput`<sup>Optional</sup> <a name="dataClassificationConfigInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfigInput"></a>

```java
public java.lang.Object getDataClassificationConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>

---

##### `inferenceLogInput`<sup>Optional</sup> <a name="inferenceLogInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLogInput"></a>

```java
public java.lang.Object getInferenceLogInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>

---

##### `latestMonitorFailureMsgInput`<sup>Optional</sup> <a name="latestMonitorFailureMsgInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsgInput"></a>

```java
public java.lang.String getLatestMonitorFailureMsgInput();
```

- *Type:* java.lang.String

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notificationsInput"></a>

```java
public java.lang.Object getNotificationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>

---

##### `outputSchemaNameInput`<sup>Optional</sup> <a name="outputSchemaNameInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaNameInput"></a>

```java
public java.lang.String getOutputSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.scheduleInput"></a>

```java
public java.lang.Object getScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>

---

##### `skipBuiltinDashboardInput`<sup>Optional</sup> <a name="skipBuiltinDashboardInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboardInput"></a>

```java
public java.lang.Object getSkipBuiltinDashboardInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `slicingExprsInput`<sup>Optional</sup> <a name="slicingExprsInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprsInput"></a>

```java
public java.util.List<java.lang.String> getSlicingExprsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotInput`<sup>Optional</sup> <a name="snapshotInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshotInput"></a>

```java
public java.lang.Object getSnapshotInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `timeSeriesInput`<sup>Optional</sup> <a name="timeSeriesInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeriesInput"></a>

```java
public java.lang.Object getTimeSeriesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseIdInput"></a>

```java
public java.lang.String getWarehouseIdInput();
```

- *Type:* java.lang.String

---

##### `assetsDir`<sup>Required</sup> <a name="assetsDir" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDir"></a>

```java
public java.lang.String getAssetsDir();
```

- *Type:* java.lang.String

---

##### `baselineTableName`<sup>Required</sup> <a name="baselineTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableName"></a>

```java
public java.lang.String getBaselineTableName();
```

- *Type:* java.lang.String

---

##### `latestMonitorFailureMsg`<sup>Required</sup> <a name="latestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsg"></a>

```java
public java.lang.String getLatestMonitorFailureMsg();
```

- *Type:* java.lang.String

---

##### `outputSchemaName`<sup>Required</sup> <a name="outputSchemaName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaName"></a>

```java
public java.lang.String getOutputSchemaName();
```

- *Type:* java.lang.String

---

##### `skipBuiltinDashboard`<sup>Required</sup> <a name="skipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboard"></a>

```java
public java.lang.Object getSkipBuiltinDashboard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `slicingExprs`<sup>Required</sup> <a name="slicingExprs" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprs"></a>

```java
public java.util.List<java.lang.String> getSlicingExprs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QualityMonitorPluginframeworkConfig <a name="QualityMonitorPluginframeworkConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkConfig;

QualityMonitorPluginframeworkConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .assetsDir(java.lang.String)
    .outputSchemaName(java.lang.String)
    .tableName(java.lang.String)
//  .baselineTableName(java.lang.String)
//  .customMetrics(IResolvable)
//  .customMetrics(java.util.List<QualityMonitorPluginframeworkCustomMetrics>)
//  .dataClassificationConfig(QualityMonitorPluginframeworkDataClassificationConfig)
//  .inferenceLog(QualityMonitorPluginframeworkInferenceLog)
//  .latestMonitorFailureMsg(java.lang.String)
//  .notifications(QualityMonitorPluginframeworkNotifications)
//  .schedule(QualityMonitorPluginframeworkSchedule)
//  .skipBuiltinDashboard(java.lang.Boolean)
//  .skipBuiltinDashboard(IResolvable)
//  .slicingExprs(java.util.List<java.lang.String>)
//  .snapshot(QualityMonitorPluginframeworkSnapshot)
//  .timeSeries(QualityMonitorPluginframeworkTimeSeries)
//  .warehouseId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.assetsDir">assetsDir</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#assets_dir QualityMonitorPluginframework#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.outputSchemaName">outputSchemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_schema_name QualityMonitorPluginframework#output_schema_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#table_name QualityMonitorPluginframework#table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.baselineTableName">baselineTableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#baseline_table_name QualityMonitorPluginframework#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.customMetrics">customMetrics</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#custom_metrics QualityMonitorPluginframework#custom_metrics}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dataClassificationConfig">dataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#data_classification_config QualityMonitorPluginframework#data_classification_config}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#inference_log QualityMonitorPluginframework#inference_log}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.latestMonitorFailureMsg">latestMonitorFailureMsg</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#latest_monitor_failure_msg QualityMonitorPluginframework#latest_monitor_failure_msg}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#notifications QualityMonitorPluginframework#notifications}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#schedule QualityMonitorPluginframework#schedule}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#skip_builtin_dashboard QualityMonitorPluginframework#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.slicingExprs">slicingExprs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#slicing_exprs QualityMonitorPluginframework#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#snapshot QualityMonitorPluginframework#snapshot}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.timeSeries">timeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#time_series QualityMonitorPluginframework#time_series}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#warehouse_id QualityMonitorPluginframework#warehouse_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetsDir`<sup>Required</sup> <a name="assetsDir" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.assetsDir"></a>

```java
public java.lang.String getAssetsDir();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#assets_dir QualityMonitorPluginframework#assets_dir}.

---

##### `outputSchemaName`<sup>Required</sup> <a name="outputSchemaName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.outputSchemaName"></a>

```java
public java.lang.String getOutputSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_schema_name QualityMonitorPluginframework#output_schema_name}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#table_name QualityMonitorPluginframework#table_name}.

---

##### `baselineTableName`<sup>Optional</sup> <a name="baselineTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.baselineTableName"></a>

```java
public java.lang.String getBaselineTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#baseline_table_name QualityMonitorPluginframework#baseline_table_name}.

---

##### `customMetrics`<sup>Optional</sup> <a name="customMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.customMetrics"></a>

```java
public java.lang.Object getCustomMetrics();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#custom_metrics QualityMonitorPluginframework#custom_metrics}.

---

##### `dataClassificationConfig`<sup>Optional</sup> <a name="dataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dataClassificationConfig"></a>

```java
public QualityMonitorPluginframeworkDataClassificationConfig getDataClassificationConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#data_classification_config QualityMonitorPluginframework#data_classification_config}.

---

##### `inferenceLog`<sup>Optional</sup> <a name="inferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.inferenceLog"></a>

```java
public QualityMonitorPluginframeworkInferenceLog getInferenceLog();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#inference_log QualityMonitorPluginframework#inference_log}.

---

##### `latestMonitorFailureMsg`<sup>Optional</sup> <a name="latestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.latestMonitorFailureMsg"></a>

```java
public java.lang.String getLatestMonitorFailureMsg();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#latest_monitor_failure_msg QualityMonitorPluginframework#latest_monitor_failure_msg}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.notifications"></a>

```java
public QualityMonitorPluginframeworkNotifications getNotifications();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#notifications QualityMonitorPluginframework#notifications}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.schedule"></a>

```java
public QualityMonitorPluginframeworkSchedule getSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#schedule QualityMonitorPluginframework#schedule}.

---

##### `skipBuiltinDashboard`<sup>Optional</sup> <a name="skipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.skipBuiltinDashboard"></a>

```java
public java.lang.Object getSkipBuiltinDashboard();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#skip_builtin_dashboard QualityMonitorPluginframework#skip_builtin_dashboard}.

---

##### `slicingExprs`<sup>Optional</sup> <a name="slicingExprs" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.slicingExprs"></a>

```java
public java.util.List<java.lang.String> getSlicingExprs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#slicing_exprs QualityMonitorPluginframework#slicing_exprs}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.snapshot"></a>

```java
public QualityMonitorPluginframeworkSnapshot getSnapshot();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#snapshot QualityMonitorPluginframework#snapshot}.

---

##### `timeSeries`<sup>Optional</sup> <a name="timeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.timeSeries"></a>

```java
public QualityMonitorPluginframeworkTimeSeries getTimeSeries();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#time_series QualityMonitorPluginframework#time_series}.

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#warehouse_id QualityMonitorPluginframework#warehouse_id}.

---

### QualityMonitorPluginframeworkCustomMetrics <a name="QualityMonitorPluginframeworkCustomMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkCustomMetrics;

QualityMonitorPluginframeworkCustomMetrics.builder()
    .definition(java.lang.String)
    .inputColumns(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .outputDataType(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#definition QualityMonitorPluginframework#definition}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.inputColumns">inputColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#input_columns QualityMonitorPluginframework#input_columns}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#name QualityMonitorPluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.outputDataType">outputDataType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_data_type QualityMonitorPluginframework#output_data_type}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#type QualityMonitorPluginframework#type}. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#definition QualityMonitorPluginframework#definition}.

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.inputColumns"></a>

```java
public java.util.List<java.lang.String> getInputColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#input_columns QualityMonitorPluginframework#input_columns}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#name QualityMonitorPluginframework#name}.

---

##### `outputDataType`<sup>Required</sup> <a name="outputDataType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.outputDataType"></a>

```java
public java.lang.String getOutputDataType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_data_type QualityMonitorPluginframework#output_data_type}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#type QualityMonitorPluginframework#type}.

---

### QualityMonitorPluginframeworkDataClassificationConfig <a name="QualityMonitorPluginframeworkDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkDataClassificationConfig;

QualityMonitorPluginframeworkDataClassificationConfig.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#enabled QualityMonitorPluginframework#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#enabled QualityMonitorPluginframework#enabled}.

---

### QualityMonitorPluginframeworkInferenceLog <a name="QualityMonitorPluginframeworkInferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkInferenceLog;

QualityMonitorPluginframeworkInferenceLog.builder()
    .granularities(java.util.List<java.lang.String>)
    .modelIdCol(java.lang.String)
    .predictionCol(java.lang.String)
    .problemType(java.lang.String)
    .timestampCol(java.lang.String)
//  .labelCol(java.lang.String)
//  .predictionProbaCol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.modelIdCol">modelIdCol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#model_id_col QualityMonitorPluginframework#model_id_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionCol">predictionCol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_col QualityMonitorPluginframework#prediction_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.problemType">problemType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#problem_type QualityMonitorPluginframework#problem_type}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.timestampCol">timestampCol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.labelCol">labelCol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#label_col QualityMonitorPluginframework#label_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionProbaCol">predictionProbaCol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_proba_col QualityMonitorPluginframework#prediction_proba_col}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}.

---

##### `modelIdCol`<sup>Required</sup> <a name="modelIdCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.modelIdCol"></a>

```java
public java.lang.String getModelIdCol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#model_id_col QualityMonitorPluginframework#model_id_col}.

---

##### `predictionCol`<sup>Required</sup> <a name="predictionCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionCol"></a>

```java
public java.lang.String getPredictionCol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_col QualityMonitorPluginframework#prediction_col}.

---

##### `problemType`<sup>Required</sup> <a name="problemType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.problemType"></a>

```java
public java.lang.String getProblemType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#problem_type QualityMonitorPluginframework#problem_type}.

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.timestampCol"></a>

```java
public java.lang.String getTimestampCol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}.

---

##### `labelCol`<sup>Optional</sup> <a name="labelCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.labelCol"></a>

```java
public java.lang.String getLabelCol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#label_col QualityMonitorPluginframework#label_col}.

---

##### `predictionProbaCol`<sup>Optional</sup> <a name="predictionProbaCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionProbaCol"></a>

```java
public java.lang.String getPredictionProbaCol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_proba_col QualityMonitorPluginframework#prediction_proba_col}.

---

### QualityMonitorPluginframeworkNotifications <a name="QualityMonitorPluginframeworkNotifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkNotifications;

QualityMonitorPluginframeworkNotifications.builder()
//  .onFailure(QualityMonitorPluginframeworkNotificationsOnFailure)
//  .onNewClassificationTagDetected(QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_failure QualityMonitorPluginframework#on_failure}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onNewClassificationTagDetected">onNewClassificationTagDetected</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_new_classification_tag_detected QualityMonitorPluginframework#on_new_classification_tag_detected}. |

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onFailure"></a>

```java
public QualityMonitorPluginframeworkNotificationsOnFailure getOnFailure();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_failure QualityMonitorPluginframework#on_failure}.

---

##### `onNewClassificationTagDetected`<sup>Optional</sup> <a name="onNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onNewClassificationTagDetected"></a>

```java
public QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected getOnNewClassificationTagDetected();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_new_classification_tag_detected QualityMonitorPluginframework#on_new_classification_tag_detected}.

---

### QualityMonitorPluginframeworkNotificationsOnFailure <a name="QualityMonitorPluginframeworkNotificationsOnFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkNotificationsOnFailure;

QualityMonitorPluginframeworkNotificationsOnFailure.builder()
//  .emailAddresses(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}. |

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}.

---

### QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected <a name="QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected;

QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected.builder()
//  .emailAddresses(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}. |

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}.

---

### QualityMonitorPluginframeworkSchedule <a name="QualityMonitorPluginframeworkSchedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkSchedule;

QualityMonitorPluginframeworkSchedule.builder()
    .quartzCronExpression(java.lang.String)
    .timezoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.quartzCronExpression">quartzCronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#quartz_cron_expression QualityMonitorPluginframework#quartz_cron_expression}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timezone_id QualityMonitorPluginframework#timezone_id}. |

---

##### `quartzCronExpression`<sup>Required</sup> <a name="quartzCronExpression" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.quartzCronExpression"></a>

```java
public java.lang.String getQuartzCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#quartz_cron_expression QualityMonitorPluginframework#quartz_cron_expression}.

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timezone_id QualityMonitorPluginframework#timezone_id}.

---

### QualityMonitorPluginframeworkSnapshot <a name="QualityMonitorPluginframeworkSnapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkSnapshot;

QualityMonitorPluginframeworkSnapshot.builder()
    .build();
```


### QualityMonitorPluginframeworkTimeSeries <a name="QualityMonitorPluginframeworkTimeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkTimeSeries;

QualityMonitorPluginframeworkTimeSeries.builder()
    .granularities(java.util.List<java.lang.String>)
    .timestampCol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.timestampCol">timestampCol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}.

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.timestampCol"></a>

```java
public java.lang.String getTimestampCol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}.

---

## Classes <a name="Classes" id="Classes"></a>

### QualityMonitorPluginframeworkCustomMetricsList <a name="QualityMonitorPluginframeworkCustomMetricsList" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkCustomMetricsList;

new QualityMonitorPluginframeworkCustomMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.get"></a>

```java
public QualityMonitorPluginframeworkCustomMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>>

---


### QualityMonitorPluginframeworkCustomMetricsOutputReference <a name="QualityMonitorPluginframeworkCustomMetricsOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference;

new QualityMonitorPluginframeworkCustomMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumnsInput">inputColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataTypeInput">outputDataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumns">inputColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataType">outputDataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `inputColumnsInput`<sup>Optional</sup> <a name="inputColumnsInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumnsInput"></a>

```java
public java.util.List<java.lang.String> getInputColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputDataTypeInput`<sup>Optional</sup> <a name="outputDataTypeInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```java
public java.lang.String getOutputDataTypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumns"></a>

```java
public java.util.List<java.lang.String> getInputColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputDataType`<sup>Required</sup> <a name="outputDataType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataType"></a>

```java
public java.lang.String getOutputDataType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics">QualityMonitorPluginframeworkCustomMetrics</a>

---


### QualityMonitorPluginframeworkDataClassificationConfigOutputReference <a name="QualityMonitorPluginframeworkDataClassificationConfigOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference;

new QualityMonitorPluginframeworkDataClassificationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>

---


### QualityMonitorPluginframeworkInferenceLogOutputReference <a name="QualityMonitorPluginframeworkInferenceLogOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference;

new QualityMonitorPluginframeworkInferenceLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetLabelCol">resetLabelCol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetPredictionProbaCol">resetPredictionProbaCol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabelCol` <a name="resetLabelCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetLabelCol"></a>

```java
public void resetLabelCol()
```

##### `resetPredictionProbaCol` <a name="resetPredictionProbaCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetPredictionProbaCol"></a>

```java
public void resetPredictionProbaCol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularitiesInput">granularitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelColInput">labelColInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdColInput">modelIdColInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionColInput">predictionColInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaColInput">predictionProbaColInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemTypeInput">problemTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampColInput">timestampColInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelCol">labelCol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdCol">modelIdCol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionCol">predictionCol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaCol">predictionProbaCol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemType">problemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampCol">timestampCol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `granularitiesInput`<sup>Optional</sup> <a name="granularitiesInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularitiesInput"></a>

```java
public java.util.List<java.lang.String> getGranularitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelColInput`<sup>Optional</sup> <a name="labelColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelColInput"></a>

```java
public java.lang.String getLabelColInput();
```

- *Type:* java.lang.String

---

##### `modelIdColInput`<sup>Optional</sup> <a name="modelIdColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdColInput"></a>

```java
public java.lang.String getModelIdColInput();
```

- *Type:* java.lang.String

---

##### `predictionColInput`<sup>Optional</sup> <a name="predictionColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionColInput"></a>

```java
public java.lang.String getPredictionColInput();
```

- *Type:* java.lang.String

---

##### `predictionProbaColInput`<sup>Optional</sup> <a name="predictionProbaColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaColInput"></a>

```java
public java.lang.String getPredictionProbaColInput();
```

- *Type:* java.lang.String

---

##### `problemTypeInput`<sup>Optional</sup> <a name="problemTypeInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemTypeInput"></a>

```java
public java.lang.String getProblemTypeInput();
```

- *Type:* java.lang.String

---

##### `timestampColInput`<sup>Optional</sup> <a name="timestampColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampColInput"></a>

```java
public java.lang.String getTimestampColInput();
```

- *Type:* java.lang.String

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelCol`<sup>Required</sup> <a name="labelCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelCol"></a>

```java
public java.lang.String getLabelCol();
```

- *Type:* java.lang.String

---

##### `modelIdCol`<sup>Required</sup> <a name="modelIdCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdCol"></a>

```java
public java.lang.String getModelIdCol();
```

- *Type:* java.lang.String

---

##### `predictionCol`<sup>Required</sup> <a name="predictionCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionCol"></a>

```java
public java.lang.String getPredictionCol();
```

- *Type:* java.lang.String

---

##### `predictionProbaCol`<sup>Required</sup> <a name="predictionProbaCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaCol"></a>

```java
public java.lang.String getPredictionProbaCol();
```

- *Type:* java.lang.String

---

##### `problemType`<sup>Required</sup> <a name="problemType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemType"></a>

```java
public java.lang.String getProblemType();
```

- *Type:* java.lang.String

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampCol"></a>

```java
public java.lang.String getTimestampCol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>

---


### QualityMonitorPluginframeworkNotificationsOnFailureOutputReference <a name="QualityMonitorPluginframeworkNotificationsOnFailureOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference;

new QualityMonitorPluginframeworkNotificationsOnFailureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resetEmailAddresses"></a>

```java
public void resetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>

---


### QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference <a name="QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference;

new QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses"></a>

```java
public void resetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>

---


### QualityMonitorPluginframeworkNotificationsOutputReference <a name="QualityMonitorPluginframeworkNotificationsOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkNotificationsOutputReference;

new QualityMonitorPluginframeworkNotificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnFailure">putOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnNewClassificationTagDetected">putOnNewClassificationTagDetected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnFailure">resetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnNewClassificationTagDetected">resetOnNewClassificationTagDetected</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnFailure` <a name="putOnFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnFailure"></a>

```java
public void putOnFailure(QualityMonitorPluginframeworkNotificationsOnFailure value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>

---

##### `putOnNewClassificationTagDetected` <a name="putOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnNewClassificationTagDetected"></a>

```java
public void putOnNewClassificationTagDetected(QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnNewClassificationTagDetected.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>

---

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnFailure"></a>

```java
public void resetOnFailure()
```

##### `resetOnNewClassificationTagDetected` <a name="resetOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnNewClassificationTagDetected"></a>

```java
public void resetOnNewClassificationTagDetected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference">QualityMonitorPluginframeworkNotificationsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetected">onNewClassificationTagDetected</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailureInput">onFailureInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetectedInput">onNewClassificationTagDetectedInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailure"></a>

```java
public QualityMonitorPluginframeworkNotificationsOnFailureOutputReference getOnFailure();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference">QualityMonitorPluginframeworkNotificationsOnFailureOutputReference</a>

---

##### `onNewClassificationTagDetected`<sup>Required</sup> <a name="onNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetected"></a>

```java
public QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference getOnNewClassificationTagDetected();
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference</a>

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailureInput"></a>

```java
public java.lang.Object getOnFailureInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>

---

##### `onNewClassificationTagDetectedInput`<sup>Optional</sup> <a name="onNewClassificationTagDetectedInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetectedInput"></a>

```java
public java.lang.Object getOnNewClassificationTagDetectedInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>

---


### QualityMonitorPluginframeworkScheduleOutputReference <a name="QualityMonitorPluginframeworkScheduleOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkScheduleOutputReference;

new QualityMonitorPluginframeworkScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.pauseStatus">pauseStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpressionInput">quartzCronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneIdInput">timezoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpression">quartzCronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pauseStatus`<sup>Required</sup> <a name="pauseStatus" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.pauseStatus"></a>

```java
public java.lang.String getPauseStatus();
```

- *Type:* java.lang.String

---

##### `quartzCronExpressionInput`<sup>Optional</sup> <a name="quartzCronExpressionInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpressionInput"></a>

```java
public java.lang.String getQuartzCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneIdInput"></a>

```java
public java.lang.String getTimezoneIdInput();
```

- *Type:* java.lang.String

---

##### `quartzCronExpression`<sup>Required</sup> <a name="quartzCronExpression" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpression"></a>

```java
public java.lang.String getQuartzCronExpression();
```

- *Type:* java.lang.String

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>

---


### QualityMonitorPluginframeworkSnapshotOutputReference <a name="QualityMonitorPluginframeworkSnapshotOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkSnapshotOutputReference;

new QualityMonitorPluginframeworkSnapshotOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>

---


### QualityMonitorPluginframeworkTimeSeriesOutputReference <a name="QualityMonitorPluginframeworkTimeSeriesOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.quality_monitor_pluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference;

new QualityMonitorPluginframeworkTimeSeriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularitiesInput">granularitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampColInput">timestampColInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampCol">timestampCol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `granularitiesInput`<sup>Optional</sup> <a name="granularitiesInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularitiesInput"></a>

```java
public java.util.List<java.lang.String> getGranularitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timestampColInput`<sup>Optional</sup> <a name="timestampColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampColInput"></a>

```java
public java.lang.String getTimestampColInput();
```

- *Type:* java.lang.String

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampCol"></a>

```java
public java.lang.String getTimestampCol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>

---



