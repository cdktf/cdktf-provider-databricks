# `lakehouseMonitor` Submodule <a name="`lakehouseMonitor` Submodule" id="@cdktf/provider-databricks.lakehouseMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakehouseMonitor <a name="LakehouseMonitor" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor databricks_lakehouse_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitor;

LakehouseMonitor.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assetsDir(java.lang.String)
    .outputSchemaName(java.lang.String)
    .tableName(java.lang.String)
//  .baselineTableName(java.lang.String)
//  .customMetrics(IResolvable|java.util.List<LakehouseMonitorCustomMetrics>)
//  .dataClassificationConfig(LakehouseMonitorDataClassificationConfig)
//  .id(java.lang.String)
//  .inferenceLog(LakehouseMonitorInferenceLog)
//  .latestMonitorFailureMsg(java.lang.String)
//  .notifications(LakehouseMonitorNotifications)
//  .schedule(LakehouseMonitorSchedule)
//  .skipBuiltinDashboard(java.lang.Boolean|IResolvable)
//  .slicingExprs(java.util.List<java.lang.String>)
//  .snapshot(LakehouseMonitorSnapshot)
//  .timeouts(LakehouseMonitorTimeouts)
//  .timeSeries(LakehouseMonitorTimeSeries)
//  .warehouseId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.assetsDir">assetsDir</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#assets_dir LakehouseMonitor#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.outputSchemaName">outputSchemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#output_schema_name LakehouseMonitor#output_schema_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#table_name LakehouseMonitor#table_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.baselineTableName">baselineTableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#baseline_table_name LakehouseMonitor#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.customMetrics">customMetrics</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>></code> | custom_metrics block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.dataClassificationConfig">dataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a></code> | data_classification_config block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#id LakehouseMonitor#id}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a></code> | inference_log block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.latestMonitorFailureMsg">latestMonitorFailureMsg</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#latest_monitor_failure_msg LakehouseMonitor#latest_monitor_failure_msg}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a></code> | notifications block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#skip_builtin_dashboard LakehouseMonitor#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.slicingExprs">slicingExprs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#slicing_exprs LakehouseMonitor#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a></code> | snapshot block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.timeSeries">timeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a></code> | time_series block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#warehouse_id LakehouseMonitor#warehouse_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetsDir`<sup>Required</sup> <a name="assetsDir" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.assetsDir"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#assets_dir LakehouseMonitor#assets_dir}.

---

##### `outputSchemaName`<sup>Required</sup> <a name="outputSchemaName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.outputSchemaName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#output_schema_name LakehouseMonitor#output_schema_name}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.tableName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#table_name LakehouseMonitor#table_name}.

---

##### `baselineTableName`<sup>Optional</sup> <a name="baselineTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.baselineTableName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#baseline_table_name LakehouseMonitor#baseline_table_name}.

---

##### `customMetrics`<sup>Optional</sup> <a name="customMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.customMetrics"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>>

custom_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#custom_metrics LakehouseMonitor#custom_metrics}

---

##### `dataClassificationConfig`<sup>Optional</sup> <a name="dataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.dataClassificationConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

data_classification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#data_classification_config LakehouseMonitor#data_classification_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#id LakehouseMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inferenceLog`<sup>Optional</sup> <a name="inferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.inferenceLog"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

inference_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#inference_log LakehouseMonitor#inference_log}

---

##### `latestMonitorFailureMsg`<sup>Optional</sup> <a name="latestMonitorFailureMsg" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.latestMonitorFailureMsg"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#latest_monitor_failure_msg LakehouseMonitor#latest_monitor_failure_msg}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.notifications"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#notifications LakehouseMonitor#notifications}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#schedule LakehouseMonitor#schedule}

---

##### `skipBuiltinDashboard`<sup>Optional</sup> <a name="skipBuiltinDashboard" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.skipBuiltinDashboard"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#skip_builtin_dashboard LakehouseMonitor#skip_builtin_dashboard}.

---

##### `slicingExprs`<sup>Optional</sup> <a name="slicingExprs" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.slicingExprs"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#slicing_exprs LakehouseMonitor#slicing_exprs}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.snapshot"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

snapshot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#snapshot LakehouseMonitor#snapshot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#timeouts LakehouseMonitor#timeouts}

---

##### `timeSeries`<sup>Optional</sup> <a name="timeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.timeSeries"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

time_series block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#time_series LakehouseMonitor#time_series}

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.warehouseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#warehouse_id LakehouseMonitor#warehouse_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putCustomMetrics">putCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putDataClassificationConfig">putDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog">putInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putNotifications">putNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSnapshot">putSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeSeries">putTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetBaselineTableName">resetBaselineTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetCustomMetrics">resetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetDataClassificationConfig">resetDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetInferenceLog">resetInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetLatestMonitorFailureMsg">resetLatestMonitorFailureMsg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetNotifications">resetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSkipBuiltinDashboard">resetSkipBuiltinDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSlicingExprs">resetSlicingExprs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSnapshot">resetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeSeries">resetTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetWarehouseId">resetWarehouseId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomMetrics` <a name="putCustomMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putCustomMetrics"></a>

```java
public void putCustomMetrics(IResolvable|java.util.List<LakehouseMonitorCustomMetrics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putCustomMetrics.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>>

---

##### `putDataClassificationConfig` <a name="putDataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putDataClassificationConfig"></a>

```java
public void putDataClassificationConfig(LakehouseMonitorDataClassificationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putDataClassificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

---

##### `putInferenceLog` <a name="putInferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog"></a>

```java
public void putInferenceLog(LakehouseMonitorInferenceLog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

---

##### `putNotifications` <a name="putNotifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putNotifications"></a>

```java
public void putNotifications(LakehouseMonitorNotifications value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSchedule"></a>

```java
public void putSchedule(LakehouseMonitorSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

---

##### `putSnapshot` <a name="putSnapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSnapshot"></a>

```java
public void putSnapshot(LakehouseMonitorSnapshot value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeouts"></a>

```java
public void putTimeouts(LakehouseMonitorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>

---

##### `putTimeSeries` <a name="putTimeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeSeries"></a>

```java
public void putTimeSeries(LakehouseMonitorTimeSeries value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeSeries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

---

##### `resetBaselineTableName` <a name="resetBaselineTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetBaselineTableName"></a>

```java
public void resetBaselineTableName()
```

##### `resetCustomMetrics` <a name="resetCustomMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetCustomMetrics"></a>

```java
public void resetCustomMetrics()
```

##### `resetDataClassificationConfig` <a name="resetDataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetDataClassificationConfig"></a>

```java
public void resetDataClassificationConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetId"></a>

```java
public void resetId()
```

##### `resetInferenceLog` <a name="resetInferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetInferenceLog"></a>

```java
public void resetInferenceLog()
```

##### `resetLatestMonitorFailureMsg` <a name="resetLatestMonitorFailureMsg" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetLatestMonitorFailureMsg"></a>

```java
public void resetLatestMonitorFailureMsg()
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetNotifications"></a>

```java
public void resetNotifications()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetSkipBuiltinDashboard` <a name="resetSkipBuiltinDashboard" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSkipBuiltinDashboard"></a>

```java
public void resetSkipBuiltinDashboard()
```

##### `resetSlicingExprs` <a name="resetSlicingExprs" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSlicingExprs"></a>

```java
public void resetSlicingExprs()
```

##### `resetSnapshot` <a name="resetSnapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSnapshot"></a>

```java
public void resetSnapshot()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeSeries` <a name="resetTimeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeSeries"></a>

```java
public void resetTimeSeries()
```

##### `resetWarehouseId` <a name="resetWarehouseId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetWarehouseId"></a>

```java
public void resetWarehouseId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LakehouseMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitor;

LakehouseMonitor.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitor;

LakehouseMonitor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitor;

LakehouseMonitor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitor;

LakehouseMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LakehouseMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LakehouseMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LakehouseMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LakehouseMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LakehouseMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetrics">customMetrics</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList">LakehouseMonitorCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfig">dataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference">LakehouseMonitorDataClassificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.driftMetricsTableName">driftMetricsTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference">LakehouseMonitorInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.monitorVersion">monitorVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference">LakehouseMonitorNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.profileMetricsTableName">profileMetricsTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference">LakehouseMonitorScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference">LakehouseMonitorSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference">LakehouseMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeries">timeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference">LakehouseMonitorTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDirInput">assetsDirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableNameInput">baselineTableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetricsInput">customMetricsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfigInput">dataClassificationConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLogInput">inferenceLogInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsgInput">latestMonitorFailureMsgInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notificationsInput">notificationsInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaNameInput">outputSchemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboardInput">skipBuiltinDashboardInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprsInput">slicingExprsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshotInput">snapshotInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeriesInput">timeSeriesInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseIdInput">warehouseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDir">assetsDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableName">baselineTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsg">latestMonitorFailureMsg</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaName">outputSchemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprs">slicingExprs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customMetrics`<sup>Required</sup> <a name="customMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetrics"></a>

```java
public LakehouseMonitorCustomMetricsList getCustomMetrics();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList">LakehouseMonitorCustomMetricsList</a>

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dashboardId"></a>

```java
public java.lang.String getDashboardId();
```

- *Type:* java.lang.String

---

##### `dataClassificationConfig`<sup>Required</sup> <a name="dataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfig"></a>

```java
public LakehouseMonitorDataClassificationConfigOutputReference getDataClassificationConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference">LakehouseMonitorDataClassificationConfigOutputReference</a>

---

##### `driftMetricsTableName`<sup>Required</sup> <a name="driftMetricsTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.driftMetricsTableName"></a>

```java
public java.lang.String getDriftMetricsTableName();
```

- *Type:* java.lang.String

---

##### `inferenceLog`<sup>Required</sup> <a name="inferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLog"></a>

```java
public LakehouseMonitorInferenceLogOutputReference getInferenceLog();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference">LakehouseMonitorInferenceLogOutputReference</a>

---

##### `monitorVersion`<sup>Required</sup> <a name="monitorVersion" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.monitorVersion"></a>

```java
public java.lang.Number getMonitorVersion();
```

- *Type:* java.lang.Number

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notifications"></a>

```java
public LakehouseMonitorNotificationsOutputReference getNotifications();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference">LakehouseMonitorNotificationsOutputReference</a>

---

##### `profileMetricsTableName`<sup>Required</sup> <a name="profileMetricsTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.profileMetricsTableName"></a>

```java
public java.lang.String getProfileMetricsTableName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.schedule"></a>

```java
public LakehouseMonitorScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference">LakehouseMonitorScheduleOutputReference</a>

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshot"></a>

```java
public LakehouseMonitorSnapshotOutputReference getSnapshot();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference">LakehouseMonitorSnapshotOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeouts"></a>

```java
public LakehouseMonitorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference">LakehouseMonitorTimeoutsOutputReference</a>

---

##### `timeSeries`<sup>Required</sup> <a name="timeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeries"></a>

```java
public LakehouseMonitorTimeSeriesOutputReference getTimeSeries();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference">LakehouseMonitorTimeSeriesOutputReference</a>

---

##### `assetsDirInput`<sup>Optional</sup> <a name="assetsDirInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDirInput"></a>

```java
public java.lang.String getAssetsDirInput();
```

- *Type:* java.lang.String

---

##### `baselineTableNameInput`<sup>Optional</sup> <a name="baselineTableNameInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableNameInput"></a>

```java
public java.lang.String getBaselineTableNameInput();
```

- *Type:* java.lang.String

---

##### `customMetricsInput`<sup>Optional</sup> <a name="customMetricsInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetricsInput"></a>

```java
public IResolvable|java.util.List<LakehouseMonitorCustomMetrics> getCustomMetricsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>>

---

##### `dataClassificationConfigInput`<sup>Optional</sup> <a name="dataClassificationConfigInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfigInput"></a>

```java
public LakehouseMonitorDataClassificationConfig getDataClassificationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inferenceLogInput`<sup>Optional</sup> <a name="inferenceLogInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLogInput"></a>

```java
public LakehouseMonitorInferenceLog getInferenceLogInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

---

##### `latestMonitorFailureMsgInput`<sup>Optional</sup> <a name="latestMonitorFailureMsgInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsgInput"></a>

```java
public java.lang.String getLatestMonitorFailureMsgInput();
```

- *Type:* java.lang.String

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notificationsInput"></a>

```java
public LakehouseMonitorNotifications getNotificationsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

---

##### `outputSchemaNameInput`<sup>Optional</sup> <a name="outputSchemaNameInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaNameInput"></a>

```java
public java.lang.String getOutputSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.scheduleInput"></a>

```java
public LakehouseMonitorSchedule getScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

---

##### `skipBuiltinDashboardInput`<sup>Optional</sup> <a name="skipBuiltinDashboardInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboardInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipBuiltinDashboardInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `slicingExprsInput`<sup>Optional</sup> <a name="slicingExprsInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprsInput"></a>

```java
public java.util.List<java.lang.String> getSlicingExprsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotInput`<sup>Optional</sup> <a name="snapshotInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshotInput"></a>

```java
public LakehouseMonitorSnapshot getSnapshotInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeoutsInput"></a>

```java
public IResolvable|LakehouseMonitorTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>

---

##### `timeSeriesInput`<sup>Optional</sup> <a name="timeSeriesInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeriesInput"></a>

```java
public LakehouseMonitorTimeSeries getTimeSeriesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseIdInput"></a>

```java
public java.lang.String getWarehouseIdInput();
```

- *Type:* java.lang.String

---

##### `assetsDir`<sup>Required</sup> <a name="assetsDir" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDir"></a>

```java
public java.lang.String getAssetsDir();
```

- *Type:* java.lang.String

---

##### `baselineTableName`<sup>Required</sup> <a name="baselineTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableName"></a>

```java
public java.lang.String getBaselineTableName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `latestMonitorFailureMsg`<sup>Required</sup> <a name="latestMonitorFailureMsg" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsg"></a>

```java
public java.lang.String getLatestMonitorFailureMsg();
```

- *Type:* java.lang.String

---

##### `outputSchemaName`<sup>Required</sup> <a name="outputSchemaName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaName"></a>

```java
public java.lang.String getOutputSchemaName();
```

- *Type:* java.lang.String

---

##### `skipBuiltinDashboard`<sup>Required</sup> <a name="skipBuiltinDashboard" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboard"></a>

```java
public java.lang.Boolean|IResolvable getSkipBuiltinDashboard();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `slicingExprs`<sup>Required</sup> <a name="slicingExprs" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprs"></a>

```java
public java.util.List<java.lang.String> getSlicingExprs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LakehouseMonitorConfig <a name="LakehouseMonitorConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorConfig;

LakehouseMonitorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assetsDir(java.lang.String)
    .outputSchemaName(java.lang.String)
    .tableName(java.lang.String)
//  .baselineTableName(java.lang.String)
//  .customMetrics(IResolvable|java.util.List<LakehouseMonitorCustomMetrics>)
//  .dataClassificationConfig(LakehouseMonitorDataClassificationConfig)
//  .id(java.lang.String)
//  .inferenceLog(LakehouseMonitorInferenceLog)
//  .latestMonitorFailureMsg(java.lang.String)
//  .notifications(LakehouseMonitorNotifications)
//  .schedule(LakehouseMonitorSchedule)
//  .skipBuiltinDashboard(java.lang.Boolean|IResolvable)
//  .slicingExprs(java.util.List<java.lang.String>)
//  .snapshot(LakehouseMonitorSnapshot)
//  .timeouts(LakehouseMonitorTimeouts)
//  .timeSeries(LakehouseMonitorTimeSeries)
//  .warehouseId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.assetsDir">assetsDir</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#assets_dir LakehouseMonitor#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.outputSchemaName">outputSchemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#output_schema_name LakehouseMonitor#output_schema_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#table_name LakehouseMonitor#table_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.baselineTableName">baselineTableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#baseline_table_name LakehouseMonitor#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.customMetrics">customMetrics</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>></code> | custom_metrics block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dataClassificationConfig">dataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a></code> | data_classification_config block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#id LakehouseMonitor#id}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a></code> | inference_log block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.latestMonitorFailureMsg">latestMonitorFailureMsg</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#latest_monitor_failure_msg LakehouseMonitor#latest_monitor_failure_msg}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.notifications">notifications</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a></code> | notifications block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#skip_builtin_dashboard LakehouseMonitor#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.slicingExprs">slicingExprs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#slicing_exprs LakehouseMonitor#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a></code> | snapshot block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeSeries">timeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a></code> | time_series block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#warehouse_id LakehouseMonitor#warehouse_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetsDir`<sup>Required</sup> <a name="assetsDir" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.assetsDir"></a>

```java
public java.lang.String getAssetsDir();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#assets_dir LakehouseMonitor#assets_dir}.

---

##### `outputSchemaName`<sup>Required</sup> <a name="outputSchemaName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.outputSchemaName"></a>

```java
public java.lang.String getOutputSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#output_schema_name LakehouseMonitor#output_schema_name}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#table_name LakehouseMonitor#table_name}.

---

##### `baselineTableName`<sup>Optional</sup> <a name="baselineTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.baselineTableName"></a>

```java
public java.lang.String getBaselineTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#baseline_table_name LakehouseMonitor#baseline_table_name}.

---

##### `customMetrics`<sup>Optional</sup> <a name="customMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.customMetrics"></a>

```java
public IResolvable|java.util.List<LakehouseMonitorCustomMetrics> getCustomMetrics();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>>

custom_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#custom_metrics LakehouseMonitor#custom_metrics}

---

##### `dataClassificationConfig`<sup>Optional</sup> <a name="dataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dataClassificationConfig"></a>

```java
public LakehouseMonitorDataClassificationConfig getDataClassificationConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

data_classification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#data_classification_config LakehouseMonitor#data_classification_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#id LakehouseMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inferenceLog`<sup>Optional</sup> <a name="inferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.inferenceLog"></a>

```java
public LakehouseMonitorInferenceLog getInferenceLog();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

inference_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#inference_log LakehouseMonitor#inference_log}

---

##### `latestMonitorFailureMsg`<sup>Optional</sup> <a name="latestMonitorFailureMsg" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.latestMonitorFailureMsg"></a>

```java
public java.lang.String getLatestMonitorFailureMsg();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#latest_monitor_failure_msg LakehouseMonitor#latest_monitor_failure_msg}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.notifications"></a>

```java
public LakehouseMonitorNotifications getNotifications();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#notifications LakehouseMonitor#notifications}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.schedule"></a>

```java
public LakehouseMonitorSchedule getSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#schedule LakehouseMonitor#schedule}

---

##### `skipBuiltinDashboard`<sup>Optional</sup> <a name="skipBuiltinDashboard" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.skipBuiltinDashboard"></a>

```java
public java.lang.Boolean|IResolvable getSkipBuiltinDashboard();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#skip_builtin_dashboard LakehouseMonitor#skip_builtin_dashboard}.

---

##### `slicingExprs`<sup>Optional</sup> <a name="slicingExprs" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.slicingExprs"></a>

```java
public java.util.List<java.lang.String> getSlicingExprs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#slicing_exprs LakehouseMonitor#slicing_exprs}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.snapshot"></a>

```java
public LakehouseMonitorSnapshot getSnapshot();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

snapshot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#snapshot LakehouseMonitor#snapshot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeouts"></a>

```java
public LakehouseMonitorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#timeouts LakehouseMonitor#timeouts}

---

##### `timeSeries`<sup>Optional</sup> <a name="timeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeSeries"></a>

```java
public LakehouseMonitorTimeSeries getTimeSeries();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

time_series block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#time_series LakehouseMonitor#time_series}

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#warehouse_id LakehouseMonitor#warehouse_id}.

---

### LakehouseMonitorCustomMetrics <a name="LakehouseMonitorCustomMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorCustomMetrics;

LakehouseMonitorCustomMetrics.builder()
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
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#definition LakehouseMonitor#definition}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.inputColumns">inputColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#input_columns LakehouseMonitor#input_columns}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#name LakehouseMonitor#name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.outputDataType">outputDataType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#output_data_type LakehouseMonitor#output_data_type}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#type LakehouseMonitor#type}. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#definition LakehouseMonitor#definition}.

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.inputColumns"></a>

```java
public java.util.List<java.lang.String> getInputColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#input_columns LakehouseMonitor#input_columns}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#name LakehouseMonitor#name}.

---

##### `outputDataType`<sup>Required</sup> <a name="outputDataType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.outputDataType"></a>

```java
public java.lang.String getOutputDataType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#output_data_type LakehouseMonitor#output_data_type}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#type LakehouseMonitor#type}.

---

### LakehouseMonitorDataClassificationConfig <a name="LakehouseMonitorDataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorDataClassificationConfig;

LakehouseMonitorDataClassificationConfig.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#enabled LakehouseMonitor#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#enabled LakehouseMonitor#enabled}.

---

### LakehouseMonitorInferenceLog <a name="LakehouseMonitorInferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorInferenceLog;

LakehouseMonitorInferenceLog.builder()
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
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.modelIdCol">modelIdCol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#model_id_col LakehouseMonitor#model_id_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionCol">predictionCol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#prediction_col LakehouseMonitor#prediction_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.problemType">problemType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#problem_type LakehouseMonitor#problem_type}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.timestampCol">timestampCol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.labelCol">labelCol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#label_col LakehouseMonitor#label_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionProbaCol">predictionProbaCol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#prediction_proba_col LakehouseMonitor#prediction_proba_col}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}.

---

##### `modelIdCol`<sup>Required</sup> <a name="modelIdCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.modelIdCol"></a>

```java
public java.lang.String getModelIdCol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#model_id_col LakehouseMonitor#model_id_col}.

---

##### `predictionCol`<sup>Required</sup> <a name="predictionCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionCol"></a>

```java
public java.lang.String getPredictionCol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#prediction_col LakehouseMonitor#prediction_col}.

---

##### `problemType`<sup>Required</sup> <a name="problemType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.problemType"></a>

```java
public java.lang.String getProblemType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#problem_type LakehouseMonitor#problem_type}.

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.timestampCol"></a>

```java
public java.lang.String getTimestampCol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}.

---

##### `labelCol`<sup>Optional</sup> <a name="labelCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.labelCol"></a>

```java
public java.lang.String getLabelCol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#label_col LakehouseMonitor#label_col}.

---

##### `predictionProbaCol`<sup>Optional</sup> <a name="predictionProbaCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionProbaCol"></a>

```java
public java.lang.String getPredictionProbaCol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#prediction_proba_col LakehouseMonitor#prediction_proba_col}.

---

### LakehouseMonitorNotifications <a name="LakehouseMonitorNotifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorNotifications;

LakehouseMonitorNotifications.builder()
//  .onFailure(LakehouseMonitorNotificationsOnFailure)
//  .onNewClassificationTagDetected(LakehouseMonitorNotificationsOnNewClassificationTagDetected)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a></code> | on_failure block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onNewClassificationTagDetected">onNewClassificationTagDetected</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a></code> | on_new_classification_tag_detected block. |

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onFailure"></a>

```java
public LakehouseMonitorNotificationsOnFailure getOnFailure();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#on_failure LakehouseMonitor#on_failure}

---

##### `onNewClassificationTagDetected`<sup>Optional</sup> <a name="onNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onNewClassificationTagDetected"></a>

```java
public LakehouseMonitorNotificationsOnNewClassificationTagDetected getOnNewClassificationTagDetected();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

on_new_classification_tag_detected block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#on_new_classification_tag_detected LakehouseMonitor#on_new_classification_tag_detected}

---

### LakehouseMonitorNotificationsOnFailure <a name="LakehouseMonitorNotificationsOnFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorNotificationsOnFailure;

LakehouseMonitorNotificationsOnFailure.builder()
//  .emailAddresses(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}. |

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}.

---

### LakehouseMonitorNotificationsOnNewClassificationTagDetected <a name="LakehouseMonitorNotificationsOnNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected;

LakehouseMonitorNotificationsOnNewClassificationTagDetected.builder()
//  .emailAddresses(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}. |

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}.

---

### LakehouseMonitorSchedule <a name="LakehouseMonitorSchedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorSchedule;

LakehouseMonitorSchedule.builder()
    .quartzCronExpression(java.lang.String)
    .timezoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.quartzCronExpression">quartzCronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#quartz_cron_expression LakehouseMonitor#quartz_cron_expression}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#timezone_id LakehouseMonitor#timezone_id}. |

---

##### `quartzCronExpression`<sup>Required</sup> <a name="quartzCronExpression" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.quartzCronExpression"></a>

```java
public java.lang.String getQuartzCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#quartz_cron_expression LakehouseMonitor#quartz_cron_expression}.

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#timezone_id LakehouseMonitor#timezone_id}.

---

### LakehouseMonitorSnapshot <a name="LakehouseMonitorSnapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorSnapshot;

LakehouseMonitorSnapshot.builder()
    .build();
```


### LakehouseMonitorTimeouts <a name="LakehouseMonitorTimeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorTimeouts;

LakehouseMonitorTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#create LakehouseMonitor#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#create LakehouseMonitor#create}.

---

### LakehouseMonitorTimeSeries <a name="LakehouseMonitorTimeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorTimeSeries;

LakehouseMonitorTimeSeries.builder()
    .granularities(java.util.List<java.lang.String>)
    .timestampCol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.timestampCol">timestampCol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}.

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.timestampCol"></a>

```java
public java.lang.String getTimestampCol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.94.0/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakehouseMonitorCustomMetricsList <a name="LakehouseMonitorCustomMetricsList" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorCustomMetricsList;

new LakehouseMonitorCustomMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.get"></a>

```java
public LakehouseMonitorCustomMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LakehouseMonitorCustomMetrics> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>>

---


### LakehouseMonitorCustomMetricsOutputReference <a name="LakehouseMonitorCustomMetricsOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorCustomMetricsOutputReference;

new LakehouseMonitorCustomMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumnsInput">inputColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataTypeInput">outputDataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumns">inputColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataType">outputDataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `inputColumnsInput`<sup>Optional</sup> <a name="inputColumnsInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumnsInput"></a>

```java
public java.util.List<java.lang.String> getInputColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputDataTypeInput`<sup>Optional</sup> <a name="outputDataTypeInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```java
public java.lang.String getOutputDataTypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumns"></a>

```java
public java.util.List<java.lang.String> getInputColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputDataType`<sup>Required</sup> <a name="outputDataType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataType"></a>

```java
public java.lang.String getOutputDataType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|LakehouseMonitorCustomMetrics getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics">LakehouseMonitorCustomMetrics</a>

---


### LakehouseMonitorDataClassificationConfigOutputReference <a name="LakehouseMonitorDataClassificationConfigOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorDataClassificationConfigOutputReference;

new LakehouseMonitorDataClassificationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.internalValue"></a>

```java
public LakehouseMonitorDataClassificationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

---


### LakehouseMonitorInferenceLogOutputReference <a name="LakehouseMonitorInferenceLogOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorInferenceLogOutputReference;

new LakehouseMonitorInferenceLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetLabelCol">resetLabelCol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetPredictionProbaCol">resetPredictionProbaCol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabelCol` <a name="resetLabelCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetLabelCol"></a>

```java
public void resetLabelCol()
```

##### `resetPredictionProbaCol` <a name="resetPredictionProbaCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetPredictionProbaCol"></a>

```java
public void resetPredictionProbaCol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularitiesInput">granularitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelColInput">labelColInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdColInput">modelIdColInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionColInput">predictionColInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaColInput">predictionProbaColInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemTypeInput">problemTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampColInput">timestampColInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelCol">labelCol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdCol">modelIdCol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionCol">predictionCol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaCol">predictionProbaCol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemType">problemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampCol">timestampCol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `granularitiesInput`<sup>Optional</sup> <a name="granularitiesInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularitiesInput"></a>

```java
public java.util.List<java.lang.String> getGranularitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelColInput`<sup>Optional</sup> <a name="labelColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelColInput"></a>

```java
public java.lang.String getLabelColInput();
```

- *Type:* java.lang.String

---

##### `modelIdColInput`<sup>Optional</sup> <a name="modelIdColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdColInput"></a>

```java
public java.lang.String getModelIdColInput();
```

- *Type:* java.lang.String

---

##### `predictionColInput`<sup>Optional</sup> <a name="predictionColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionColInput"></a>

```java
public java.lang.String getPredictionColInput();
```

- *Type:* java.lang.String

---

##### `predictionProbaColInput`<sup>Optional</sup> <a name="predictionProbaColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaColInput"></a>

```java
public java.lang.String getPredictionProbaColInput();
```

- *Type:* java.lang.String

---

##### `problemTypeInput`<sup>Optional</sup> <a name="problemTypeInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemTypeInput"></a>

```java
public java.lang.String getProblemTypeInput();
```

- *Type:* java.lang.String

---

##### `timestampColInput`<sup>Optional</sup> <a name="timestampColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampColInput"></a>

```java
public java.lang.String getTimestampColInput();
```

- *Type:* java.lang.String

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelCol`<sup>Required</sup> <a name="labelCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelCol"></a>

```java
public java.lang.String getLabelCol();
```

- *Type:* java.lang.String

---

##### `modelIdCol`<sup>Required</sup> <a name="modelIdCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdCol"></a>

```java
public java.lang.String getModelIdCol();
```

- *Type:* java.lang.String

---

##### `predictionCol`<sup>Required</sup> <a name="predictionCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionCol"></a>

```java
public java.lang.String getPredictionCol();
```

- *Type:* java.lang.String

---

##### `predictionProbaCol`<sup>Required</sup> <a name="predictionProbaCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaCol"></a>

```java
public java.lang.String getPredictionProbaCol();
```

- *Type:* java.lang.String

---

##### `problemType`<sup>Required</sup> <a name="problemType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemType"></a>

```java
public java.lang.String getProblemType();
```

- *Type:* java.lang.String

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampCol"></a>

```java
public java.lang.String getTimestampCol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.internalValue"></a>

```java
public LakehouseMonitorInferenceLog getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

---


### LakehouseMonitorNotificationsOnFailureOutputReference <a name="LakehouseMonitorNotificationsOnFailureOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorNotificationsOnFailureOutputReference;

new LakehouseMonitorNotificationsOnFailureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resetEmailAddresses"></a>

```java
public void resetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.internalValue"></a>

```java
public LakehouseMonitorNotificationsOnFailure getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

---


### LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference <a name="LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference;

new LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses"></a>

```java
public void resetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue"></a>

```java
public LakehouseMonitorNotificationsOnNewClassificationTagDetected getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

---


### LakehouseMonitorNotificationsOutputReference <a name="LakehouseMonitorNotificationsOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorNotificationsOutputReference;

new LakehouseMonitorNotificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnFailure">putOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnNewClassificationTagDetected">putOnNewClassificationTagDetected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnFailure">resetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnNewClassificationTagDetected">resetOnNewClassificationTagDetected</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnFailure` <a name="putOnFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnFailure"></a>

```java
public void putOnFailure(LakehouseMonitorNotificationsOnFailure value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

---

##### `putOnNewClassificationTagDetected` <a name="putOnNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnNewClassificationTagDetected"></a>

```java
public void putOnNewClassificationTagDetected(LakehouseMonitorNotificationsOnNewClassificationTagDetected value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnNewClassificationTagDetected.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

---

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnFailure"></a>

```java
public void resetOnFailure()
```

##### `resetOnNewClassificationTagDetected` <a name="resetOnNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnNewClassificationTagDetected"></a>

```java
public void resetOnNewClassificationTagDetected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference">LakehouseMonitorNotificationsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetected">onNewClassificationTagDetected</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference">LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailureInput">onFailureInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetectedInput">onNewClassificationTagDetectedInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailure"></a>

```java
public LakehouseMonitorNotificationsOnFailureOutputReference getOnFailure();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference">LakehouseMonitorNotificationsOnFailureOutputReference</a>

---

##### `onNewClassificationTagDetected`<sup>Required</sup> <a name="onNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetected"></a>

```java
public LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference getOnNewClassificationTagDetected();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference">LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference</a>

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailureInput"></a>

```java
public LakehouseMonitorNotificationsOnFailure getOnFailureInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

---

##### `onNewClassificationTagDetectedInput`<sup>Optional</sup> <a name="onNewClassificationTagDetectedInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetectedInput"></a>

```java
public LakehouseMonitorNotificationsOnNewClassificationTagDetected getOnNewClassificationTagDetectedInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.internalValue"></a>

```java
public LakehouseMonitorNotifications getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

---


### LakehouseMonitorScheduleOutputReference <a name="LakehouseMonitorScheduleOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorScheduleOutputReference;

new LakehouseMonitorScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.pauseStatus">pauseStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpressionInput">quartzCronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneIdInput">timezoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpression">quartzCronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pauseStatus`<sup>Required</sup> <a name="pauseStatus" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.pauseStatus"></a>

```java
public java.lang.String getPauseStatus();
```

- *Type:* java.lang.String

---

##### `quartzCronExpressionInput`<sup>Optional</sup> <a name="quartzCronExpressionInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpressionInput"></a>

```java
public java.lang.String getQuartzCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneIdInput"></a>

```java
public java.lang.String getTimezoneIdInput();
```

- *Type:* java.lang.String

---

##### `quartzCronExpression`<sup>Required</sup> <a name="quartzCronExpression" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpression"></a>

```java
public java.lang.String getQuartzCronExpression();
```

- *Type:* java.lang.String

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.internalValue"></a>

```java
public LakehouseMonitorSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

---


### LakehouseMonitorSnapshotOutputReference <a name="LakehouseMonitorSnapshotOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorSnapshotOutputReference;

new LakehouseMonitorSnapshotOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.internalValue"></a>

```java
public LakehouseMonitorSnapshot getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

---


### LakehouseMonitorTimeoutsOutputReference <a name="LakehouseMonitorTimeoutsOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorTimeoutsOutputReference;

new LakehouseMonitorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|LakehouseMonitorTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>

---


### LakehouseMonitorTimeSeriesOutputReference <a name="LakehouseMonitorTimeSeriesOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.lakehouse_monitor.LakehouseMonitorTimeSeriesOutputReference;

new LakehouseMonitorTimeSeriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularitiesInput">granularitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampColInput">timestampColInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampCol">timestampCol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `granularitiesInput`<sup>Optional</sup> <a name="granularitiesInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularitiesInput"></a>

```java
public java.util.List<java.lang.String> getGranularitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timestampColInput`<sup>Optional</sup> <a name="timestampColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampColInput"></a>

```java
public java.lang.String getTimestampColInput();
```

- *Type:* java.lang.String

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timestampCol`<sup>Required</sup> <a name="timestampCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampCol"></a>

```java
public java.lang.String getTimestampCol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.internalValue"></a>

```java
public LakehouseMonitorTimeSeries getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

---



