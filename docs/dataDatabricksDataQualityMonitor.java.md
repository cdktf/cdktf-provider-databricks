# `dataDatabricksDataQualityMonitor` Submodule <a name="`dataDatabricksDataQualityMonitor` Submodule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataQualityMonitor <a name="DataDatabricksDataQualityMonitor" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor databricks_data_quality_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitor;

DataDatabricksDataQualityMonitor.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .objectId(java.lang.String)
    .objectType(java.lang.String)
//  .anomalyDetectionConfig(DataDatabricksDataQualityMonitorAnomalyDetectionConfig)
//  .dataProfilingConfig(DataDatabricksDataQualityMonitorDataProfilingConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#object_id DataDatabricksDataQualityMonitor#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.objectType">objectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#object_type DataDatabricksDataQualityMonitor#object_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.anomalyDetectionConfig">anomalyDetectionConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig">DataDatabricksDataQualityMonitorAnomalyDetectionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#anomaly_detection_config DataDatabricksDataQualityMonitor#anomaly_detection_config}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.dataProfilingConfig">dataProfilingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig">DataDatabricksDataQualityMonitorDataProfilingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#data_profiling_config DataDatabricksDataQualityMonitor#data_profiling_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#object_id DataDatabricksDataQualityMonitor#object_id}.

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.objectType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#object_type DataDatabricksDataQualityMonitor#object_type}.

---

##### `anomalyDetectionConfig`<sup>Optional</sup> <a name="anomalyDetectionConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.anomalyDetectionConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig">DataDatabricksDataQualityMonitorAnomalyDetectionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#anomaly_detection_config DataDatabricksDataQualityMonitor#anomaly_detection_config}.

---

##### `dataProfilingConfig`<sup>Optional</sup> <a name="dataProfilingConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.Initializer.parameter.dataProfilingConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig">DataDatabricksDataQualityMonitorDataProfilingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#data_profiling_config DataDatabricksDataQualityMonitor#data_profiling_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.putAnomalyDetectionConfig">putAnomalyDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.putDataProfilingConfig">putDataProfilingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.resetAnomalyDetectionConfig">resetAnomalyDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.resetDataProfilingConfig">resetDataProfilingConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAnomalyDetectionConfig` <a name="putAnomalyDetectionConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.putAnomalyDetectionConfig"></a>

```java
public void putAnomalyDetectionConfig(DataDatabricksDataQualityMonitorAnomalyDetectionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.putAnomalyDetectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig">DataDatabricksDataQualityMonitorAnomalyDetectionConfig</a>

---

##### `putDataProfilingConfig` <a name="putDataProfilingConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.putDataProfilingConfig"></a>

```java
public void putDataProfilingConfig(DataDatabricksDataQualityMonitorDataProfilingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.putDataProfilingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig">DataDatabricksDataQualityMonitorDataProfilingConfig</a>

---

##### `resetAnomalyDetectionConfig` <a name="resetAnomalyDetectionConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.resetAnomalyDetectionConfig"></a>

```java
public void resetAnomalyDetectionConfig()
```

##### `resetDataProfilingConfig` <a name="resetDataProfilingConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.resetDataProfilingConfig"></a>

```java
public void resetDataProfilingConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDataQualityMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitor;

DataDatabricksDataQualityMonitor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitor;

DataDatabricksDataQualityMonitor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitor;

DataDatabricksDataQualityMonitor.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitor;

DataDatabricksDataQualityMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksDataQualityMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksDataQualityMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksDataQualityMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksDataQualityMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataQualityMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.anomalyDetectionConfig">anomalyDetectionConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference">DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.dataProfilingConfig">dataProfilingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.anomalyDetectionConfigInput">anomalyDetectionConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig">DataDatabricksDataQualityMonitorAnomalyDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.dataProfilingConfigInput">dataProfilingConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig">DataDatabricksDataQualityMonitorDataProfilingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectTypeInput">objectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `anomalyDetectionConfig`<sup>Required</sup> <a name="anomalyDetectionConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.anomalyDetectionConfig"></a>

```java
public DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference getAnomalyDetectionConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference">DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference</a>

---

##### `dataProfilingConfig`<sup>Required</sup> <a name="dataProfilingConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.dataProfilingConfig"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference getDataProfilingConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference</a>

---

##### `anomalyDetectionConfigInput`<sup>Optional</sup> <a name="anomalyDetectionConfigInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.anomalyDetectionConfigInput"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorAnomalyDetectionConfig getAnomalyDetectionConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig">DataDatabricksDataQualityMonitorAnomalyDetectionConfig</a>

---

##### `dataProfilingConfigInput`<sup>Optional</sup> <a name="dataProfilingConfigInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.dataProfilingConfigInput"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorDataProfilingConfig getDataProfilingConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig">DataDatabricksDataQualityMonitorDataProfilingConfig</a>

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectTypeInput"></a>

```java
public java.lang.String getObjectTypeInput();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataQualityMonitorAnomalyDetectionConfig <a name="DataDatabricksDataQualityMonitorAnomalyDetectionConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig;

DataDatabricksDataQualityMonitorAnomalyDetectionConfig.builder()
    .build();
```


### DataDatabricksDataQualityMonitorConfig <a name="DataDatabricksDataQualityMonitorConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorConfig;

DataDatabricksDataQualityMonitorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .objectId(java.lang.String)
    .objectType(java.lang.String)
//  .anomalyDetectionConfig(DataDatabricksDataQualityMonitorAnomalyDetectionConfig)
//  .dataProfilingConfig(DataDatabricksDataQualityMonitorDataProfilingConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#object_id DataDatabricksDataQualityMonitor#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.objectType">objectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#object_type DataDatabricksDataQualityMonitor#object_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.anomalyDetectionConfig">anomalyDetectionConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig">DataDatabricksDataQualityMonitorAnomalyDetectionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#anomaly_detection_config DataDatabricksDataQualityMonitor#anomaly_detection_config}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.dataProfilingConfig">dataProfilingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig">DataDatabricksDataQualityMonitorDataProfilingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#data_profiling_config DataDatabricksDataQualityMonitor#data_profiling_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#object_id DataDatabricksDataQualityMonitor#object_id}.

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#object_type DataDatabricksDataQualityMonitor#object_type}.

---

##### `anomalyDetectionConfig`<sup>Optional</sup> <a name="anomalyDetectionConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.anomalyDetectionConfig"></a>

```java
public DataDatabricksDataQualityMonitorAnomalyDetectionConfig getAnomalyDetectionConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig">DataDatabricksDataQualityMonitorAnomalyDetectionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#anomaly_detection_config DataDatabricksDataQualityMonitor#anomaly_detection_config}.

---

##### `dataProfilingConfig`<sup>Optional</sup> <a name="dataProfilingConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorConfig.property.dataProfilingConfig"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfig getDataProfilingConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig">DataDatabricksDataQualityMonitorDataProfilingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#data_profiling_config DataDatabricksDataQualityMonitor#data_profiling_config}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfig <a name="DataDatabricksDataQualityMonitorDataProfilingConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfig;

DataDatabricksDataQualityMonitorDataProfilingConfig.builder()
    .outputSchemaId(java.lang.String)
//  .assetsDir(java.lang.String)
//  .baselineTableName(java.lang.String)
//  .customMetrics(IResolvable|java.util.List<DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics>)
//  .inferenceLog(DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog)
//  .notificationSettings(DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings)
//  .schedule(DataDatabricksDataQualityMonitorDataProfilingConfigSchedule)
//  .skipBuiltinDashboard(java.lang.Boolean|IResolvable)
//  .slicingExprs(java.util.List<java.lang.String>)
//  .snapshot(DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot)
//  .timeSeries(DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries)
//  .warehouseId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.outputSchemaId">outputSchemaId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#output_schema_id DataDatabricksDataQualityMonitor#output_schema_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.assetsDir">assetsDir</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#assets_dir DataDatabricksDataQualityMonitor#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.baselineTableName">baselineTableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#baseline_table_name DataDatabricksDataQualityMonitor#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.customMetrics">customMetrics</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#custom_metrics DataDatabricksDataQualityMonitor#custom_metrics}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#inference_log DataDatabricksDataQualityMonitor#inference_log}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#notification_settings DataDatabricksDataQualityMonitor#notification_settings}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#schedule DataDatabricksDataQualityMonitor#schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#skip_builtin_dashboard DataDatabricksDataQualityMonitor#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.slicingExprs">slicingExprs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#slicing_exprs DataDatabricksDataQualityMonitor#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#snapshot DataDatabricksDataQualityMonitor#snapshot}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.timeSeries">timeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#time_series DataDatabricksDataQualityMonitor#time_series}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#warehouse_id DataDatabricksDataQualityMonitor#warehouse_id}. |

---

##### `outputSchemaId`<sup>Required</sup> <a name="outputSchemaId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.outputSchemaId"></a>

```java
public java.lang.String getOutputSchemaId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#output_schema_id DataDatabricksDataQualityMonitor#output_schema_id}.

---

##### `assetsDir`<sup>Optional</sup> <a name="assetsDir" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.assetsDir"></a>

```java
public java.lang.String getAssetsDir();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#assets_dir DataDatabricksDataQualityMonitor#assets_dir}.

---

##### `baselineTableName`<sup>Optional</sup> <a name="baselineTableName" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.baselineTableName"></a>

```java
public java.lang.String getBaselineTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#baseline_table_name DataDatabricksDataQualityMonitor#baseline_table_name}.

---

##### `customMetrics`<sup>Optional</sup> <a name="customMetrics" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.customMetrics"></a>

```java
public IResolvable|java.util.List<DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics> getCustomMetrics();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#custom_metrics DataDatabricksDataQualityMonitor#custom_metrics}.

---

##### `inferenceLog`<sup>Optional</sup> <a name="inferenceLog" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.inferenceLog"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog getInferenceLog();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#inference_log DataDatabricksDataQualityMonitor#inference_log}.

---

##### `notificationSettings`<sup>Optional</sup> <a name="notificationSettings" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.notificationSettings"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings getNotificationSettings();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#notification_settings DataDatabricksDataQualityMonitor#notification_settings}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.schedule"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfigSchedule getSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#schedule DataDatabricksDataQualityMonitor#schedule}.

---

##### `skipBuiltinDashboard`<sup>Optional</sup> <a name="skipBuiltinDashboard" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.skipBuiltinDashboard"></a>

```java
public java.lang.Boolean|IResolvable getSkipBuiltinDashboard();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#skip_builtin_dashboard DataDatabricksDataQualityMonitor#skip_builtin_dashboard}.

---

##### `slicingExprs`<sup>Optional</sup> <a name="slicingExprs" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.slicingExprs"></a>

```java
public java.util.List<java.lang.String> getSlicingExprs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#slicing_exprs DataDatabricksDataQualityMonitor#slicing_exprs}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.snapshot"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot getSnapshot();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#snapshot DataDatabricksDataQualityMonitor#snapshot}.

---

##### `timeSeries`<sup>Optional</sup> <a name="timeSeries" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.timeSeries"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries getTimeSeries();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#time_series DataDatabricksDataQualityMonitor#time_series}.

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#warehouse_id DataDatabricksDataQualityMonitor#warehouse_id}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics <a name="DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics;

DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.builder()
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#definition DataDatabricksDataQualityMonitor#definition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.inputColumns">inputColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#input_columns DataDatabricksDataQualityMonitor#input_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#name DataDatabricksDataQualityMonitor#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.outputDataType">outputDataType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#output_data_type DataDatabricksDataQualityMonitor#output_data_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#type DataDatabricksDataQualityMonitor#type}. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#definition DataDatabricksDataQualityMonitor#definition}.

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.inputColumns"></a>

```java
public java.util.List<java.lang.String> getInputColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#input_columns DataDatabricksDataQualityMonitor#input_columns}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#name DataDatabricksDataQualityMonitor#name}.

---

##### `outputDataType`<sup>Required</sup> <a name="outputDataType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.outputDataType"></a>

```java
public java.lang.String getOutputDataType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#output_data_type DataDatabricksDataQualityMonitor#output_data_type}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#type DataDatabricksDataQualityMonitor#type}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog <a name="DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog;

DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.builder()
    .granularities(java.util.List<java.lang.String>)
    .modelIdColumn(java.lang.String)
    .predictionColumn(java.lang.String)
    .problemType(java.lang.String)
    .timestampColumn(java.lang.String)
//  .labelColumn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#granularities DataDatabricksDataQualityMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.modelIdColumn">modelIdColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#model_id_column DataDatabricksDataQualityMonitor#model_id_column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.predictionColumn">predictionColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#prediction_column DataDatabricksDataQualityMonitor#prediction_column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.problemType">problemType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#problem_type DataDatabricksDataQualityMonitor#problem_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.timestampColumn">timestampColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#timestamp_column DataDatabricksDataQualityMonitor#timestamp_column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.labelColumn">labelColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#label_column DataDatabricksDataQualityMonitor#label_column}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#granularities DataDatabricksDataQualityMonitor#granularities}.

---

##### `modelIdColumn`<sup>Required</sup> <a name="modelIdColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.modelIdColumn"></a>

```java
public java.lang.String getModelIdColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#model_id_column DataDatabricksDataQualityMonitor#model_id_column}.

---

##### `predictionColumn`<sup>Required</sup> <a name="predictionColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.predictionColumn"></a>

```java
public java.lang.String getPredictionColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#prediction_column DataDatabricksDataQualityMonitor#prediction_column}.

---

##### `problemType`<sup>Required</sup> <a name="problemType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.problemType"></a>

```java
public java.lang.String getProblemType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#problem_type DataDatabricksDataQualityMonitor#problem_type}.

---

##### `timestampColumn`<sup>Required</sup> <a name="timestampColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.timestampColumn"></a>

```java
public java.lang.String getTimestampColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#timestamp_column DataDatabricksDataQualityMonitor#timestamp_column}.

---

##### `labelColumn`<sup>Optional</sup> <a name="labelColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog.property.labelColumn"></a>

```java
public java.lang.String getLabelColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#label_column DataDatabricksDataQualityMonitor#label_column}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings <a name="DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings;

DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings.builder()
//  .onFailure(DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#on_failure DataDatabricksDataQualityMonitor#on_failure}. |

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings.property.onFailure"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure getOnFailure();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#on_failure DataDatabricksDataQualityMonitor#on_failure}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure <a name="DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure;

DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.builder()
//  .emailAddresses(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#email_addresses DataDatabricksDataQualityMonitor#email_addresses}. |

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#email_addresses DataDatabricksDataQualityMonitor#email_addresses}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigSchedule <a name="DataDatabricksDataQualityMonitorDataProfilingConfigSchedule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule;

DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.builder()
    .quartzCronExpression(java.lang.String)
    .timezoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.property.quartzCronExpression">quartzCronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#quartz_cron_expression DataDatabricksDataQualityMonitor#quartz_cron_expression}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#timezone_id DataDatabricksDataQualityMonitor#timezone_id}. |

---

##### `quartzCronExpression`<sup>Required</sup> <a name="quartzCronExpression" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.property.quartzCronExpression"></a>

```java
public java.lang.String getQuartzCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#quartz_cron_expression DataDatabricksDataQualityMonitor#quartz_cron_expression}.

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#timezone_id DataDatabricksDataQualityMonitor#timezone_id}.

---

### DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot <a name="DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot;

DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot.builder()
    .build();
```


### DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries <a name="DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries;

DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.builder()
    .granularities(java.util.List<java.lang.String>)
    .timestampColumn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#granularities DataDatabricksDataQualityMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.property.timestampColumn">timestampColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#timestamp_column DataDatabricksDataQualityMonitor#timestamp_column}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#granularities DataDatabricksDataQualityMonitor#granularities}.

---

##### `timestampColumn`<sup>Required</sup> <a name="timestampColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries.property.timestampColumn"></a>

```java
public java.lang.String getTimestampColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/data_quality_monitor#timestamp_column DataDatabricksDataQualityMonitor#timestamp_column}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference <a name="DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference;

new DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig">DataDatabricksDataQualityMonitorAnomalyDetectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorAnomalyDetectionConfig getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorAnomalyDetectionConfig">DataDatabricksDataQualityMonitorAnomalyDetectionConfig</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList <a name="DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList;

new DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.get"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference;

new DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput">inputColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput">outputDataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumns">inputColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataType">outputDataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `inputColumnsInput`<sup>Optional</sup> <a name="inputColumnsInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput"></a>

```java
public java.util.List<java.lang.String> getInputColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputDataTypeInput`<sup>Optional</sup> <a name="outputDataTypeInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```java
public java.lang.String getOutputDataTypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumns"></a>

```java
public java.util.List<java.lang.String> getInputColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputDataType`<sup>Required</sup> <a name="outputDataType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataType"></a>

```java
public java.lang.String getOutputDataType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference;

new DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resetLabelColumn">resetLabelColumn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabelColumn` <a name="resetLabelColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resetLabelColumn"></a>

```java
public void resetLabelColumn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput">granularitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput">labelColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput">modelIdColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput">predictionColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput">problemTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput">timestampColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumn">labelColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn">modelIdColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumn">predictionColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemType">problemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumn">timestampColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `granularitiesInput`<sup>Optional</sup> <a name="granularitiesInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput"></a>

```java
public java.util.List<java.lang.String> getGranularitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelColumnInput`<sup>Optional</sup> <a name="labelColumnInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput"></a>

```java
public java.lang.String getLabelColumnInput();
```

- *Type:* java.lang.String

---

##### `modelIdColumnInput`<sup>Optional</sup> <a name="modelIdColumnInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput"></a>

```java
public java.lang.String getModelIdColumnInput();
```

- *Type:* java.lang.String

---

##### `predictionColumnInput`<sup>Optional</sup> <a name="predictionColumnInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput"></a>

```java
public java.lang.String getPredictionColumnInput();
```

- *Type:* java.lang.String

---

##### `problemTypeInput`<sup>Optional</sup> <a name="problemTypeInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput"></a>

```java
public java.lang.String getProblemTypeInput();
```

- *Type:* java.lang.String

---

##### `timestampColumnInput`<sup>Optional</sup> <a name="timestampColumnInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput"></a>

```java
public java.lang.String getTimestampColumnInput();
```

- *Type:* java.lang.String

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelColumn`<sup>Required</sup> <a name="labelColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumn"></a>

```java
public java.lang.String getLabelColumn();
```

- *Type:* java.lang.String

---

##### `modelIdColumn`<sup>Required</sup> <a name="modelIdColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn"></a>

```java
public java.lang.String getModelIdColumn();
```

- *Type:* java.lang.String

---

##### `predictionColumn`<sup>Required</sup> <a name="predictionColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumn"></a>

```java
public java.lang.String getPredictionColumn();
```

- *Type:* java.lang.String

---

##### `problemType`<sup>Required</sup> <a name="problemType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemType"></a>

```java
public java.lang.String getProblemType();
```

- *Type:* java.lang.String

---

##### `timestampColumn`<sup>Required</sup> <a name="timestampColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumn"></a>

```java
public java.lang.String getTimestampColumn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference;

new DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses"></a>

```java
public void resetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference;

new DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.putOnFailure">putOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure">resetOnFailure</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnFailure` <a name="putOnFailure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.putOnFailure"></a>

```java
public void putOnFailure(DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

---

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure"></a>

```java
public void resetOnFailure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput">onFailureInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailure"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference getOnFailure();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference</a>

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure getOnFailureInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference;

new DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putCustomMetrics">putCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog">putInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putNotificationSettings">putNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSnapshot">putSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries">putTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetAssetsDir">resetAssetsDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetBaselineTableName">resetBaselineTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetCustomMetrics">resetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetInferenceLog">resetInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetNotificationSettings">resetNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSkipBuiltinDashboard">resetSkipBuiltinDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSlicingExprs">resetSlicingExprs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSnapshot">resetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetTimeSeries">resetTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetWarehouseId">resetWarehouseId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomMetrics` <a name="putCustomMetrics" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putCustomMetrics"></a>

```java
public void putCustomMetrics(IResolvable|java.util.List<DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putCustomMetrics.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>>

---

##### `putInferenceLog` <a name="putInferenceLog" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog"></a>

```java
public void putInferenceLog(DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a>

---

##### `putNotificationSettings` <a name="putNotificationSettings" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putNotificationSettings"></a>

```java
public void putNotificationSettings(DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSchedule"></a>

```java
public void putSchedule(DataDatabricksDataQualityMonitorDataProfilingConfigSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a>

---

##### `putSnapshot` <a name="putSnapshot" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSnapshot"></a>

```java
public void putSnapshot(DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a>

---

##### `putTimeSeries` <a name="putTimeSeries" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries"></a>

```java
public void putTimeSeries(DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a>

---

##### `resetAssetsDir` <a name="resetAssetsDir" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetAssetsDir"></a>

```java
public void resetAssetsDir()
```

##### `resetBaselineTableName` <a name="resetBaselineTableName" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetBaselineTableName"></a>

```java
public void resetBaselineTableName()
```

##### `resetCustomMetrics` <a name="resetCustomMetrics" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetCustomMetrics"></a>

```java
public void resetCustomMetrics()
```

##### `resetInferenceLog` <a name="resetInferenceLog" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetInferenceLog"></a>

```java
public void resetInferenceLog()
```

##### `resetNotificationSettings` <a name="resetNotificationSettings" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetNotificationSettings"></a>

```java
public void resetNotificationSettings()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetSkipBuiltinDashboard` <a name="resetSkipBuiltinDashboard" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSkipBuiltinDashboard"></a>

```java
public void resetSkipBuiltinDashboard()
```

##### `resetSlicingExprs` <a name="resetSlicingExprs" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSlicingExprs"></a>

```java
public void resetSlicingExprs()
```

##### `resetSnapshot` <a name="resetSnapshot" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetSnapshot"></a>

```java
public void resetSnapshot()
```

##### `resetTimeSeries` <a name="resetTimeSeries" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetTimeSeries"></a>

```java
public void resetTimeSeries()
```

##### `resetWarehouseId` <a name="resetWarehouseId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.resetWarehouseId"></a>

```java
public void resetWarehouseId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.customMetrics">customMetrics</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.driftMetricsTableName">driftMetricsTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.effectiveWarehouseId">effectiveWarehouseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.latestMonitorFailureMessage">latestMonitorFailureMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.monitoredTableName">monitoredTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.monitorVersion">monitorVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.profileMetricsTableName">profileMetricsTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.timeSeries">timeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.assetsDirInput">assetsDirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableNameInput">baselineTableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.customMetricsInput">customMetricsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLogInput">inferenceLogInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettingsInput">notificationSettingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaIdInput">outputSchemaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput">skipBuiltinDashboardInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprsInput">slicingExprsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.snapshotInput">snapshotInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.timeSeriesInput">timeSeriesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.warehouseIdInput">warehouseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.assetsDir">assetsDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableName">baselineTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaId">outputSchemaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprs">slicingExprs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig">DataDatabricksDataQualityMonitorDataProfilingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customMetrics`<sup>Required</sup> <a name="customMetrics" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.customMetrics"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList getCustomMetrics();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetricsList</a>

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.dashboardId"></a>

```java
public java.lang.String getDashboardId();
```

- *Type:* java.lang.String

---

##### `driftMetricsTableName`<sup>Required</sup> <a name="driftMetricsTableName" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.driftMetricsTableName"></a>

```java
public java.lang.String getDriftMetricsTableName();
```

- *Type:* java.lang.String

---

##### `effectiveWarehouseId`<sup>Required</sup> <a name="effectiveWarehouseId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.effectiveWarehouseId"></a>

```java
public java.lang.String getEffectiveWarehouseId();
```

- *Type:* java.lang.String

---

##### `inferenceLog`<sup>Required</sup> <a name="inferenceLog" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLog"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference getInferenceLog();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLogOutputReference</a>

---

##### `latestMonitorFailureMessage`<sup>Required</sup> <a name="latestMonitorFailureMessage" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.latestMonitorFailureMessage"></a>

```java
public java.lang.String getLatestMonitorFailureMessage();
```

- *Type:* java.lang.String

---

##### `monitoredTableName`<sup>Required</sup> <a name="monitoredTableName" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.monitoredTableName"></a>

```java
public java.lang.String getMonitoredTableName();
```

- *Type:* java.lang.String

---

##### `monitorVersion`<sup>Required</sup> <a name="monitorVersion" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.monitorVersion"></a>

```java
public java.lang.Number getMonitorVersion();
```

- *Type:* java.lang.Number

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettings"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference getNotificationSettings();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference</a>

---

##### `profileMetricsTableName`<sup>Required</sup> <a name="profileMetricsTableName" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.profileMetricsTableName"></a>

```java
public java.lang.String getProfileMetricsTableName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.schedule"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference</a>

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.snapshot"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference getSnapshot();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeSeries`<sup>Required</sup> <a name="timeSeries" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.timeSeries"></a>

```java
public DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference getTimeSeries();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference</a>

---

##### `assetsDirInput`<sup>Optional</sup> <a name="assetsDirInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.assetsDirInput"></a>

```java
public java.lang.String getAssetsDirInput();
```

- *Type:* java.lang.String

---

##### `baselineTableNameInput`<sup>Optional</sup> <a name="baselineTableNameInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableNameInput"></a>

```java
public java.lang.String getBaselineTableNameInput();
```

- *Type:* java.lang.String

---

##### `customMetricsInput`<sup>Optional</sup> <a name="customMetricsInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.customMetricsInput"></a>

```java
public IResolvable|java.util.List<DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics> getCustomMetricsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorDataProfilingConfigCustomMetrics</a>>

---

##### `inferenceLogInput`<sup>Optional</sup> <a name="inferenceLogInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLogInput"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog getInferenceLogInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorDataProfilingConfigInferenceLog</a>

---

##### `notificationSettingsInput`<sup>Optional</sup> <a name="notificationSettingsInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettingsInput"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings getNotificationSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorDataProfilingConfigNotificationSettings</a>

---

##### `outputSchemaIdInput`<sup>Optional</sup> <a name="outputSchemaIdInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaIdInput"></a>

```java
public java.lang.String getOutputSchemaIdInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.scheduleInput"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorDataProfilingConfigSchedule getScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a>

---

##### `skipBuiltinDashboardInput`<sup>Optional</sup> <a name="skipBuiltinDashboardInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipBuiltinDashboardInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `slicingExprsInput`<sup>Optional</sup> <a name="slicingExprsInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprsInput"></a>

```java
public java.util.List<java.lang.String> getSlicingExprsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotInput`<sup>Optional</sup> <a name="snapshotInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.snapshotInput"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot getSnapshotInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a>

---

##### `timeSeriesInput`<sup>Optional</sup> <a name="timeSeriesInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.timeSeriesInput"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries getTimeSeriesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a>

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.warehouseIdInput"></a>

```java
public java.lang.String getWarehouseIdInput();
```

- *Type:* java.lang.String

---

##### `assetsDir`<sup>Required</sup> <a name="assetsDir" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.assetsDir"></a>

```java
public java.lang.String getAssetsDir();
```

- *Type:* java.lang.String

---

##### `baselineTableName`<sup>Required</sup> <a name="baselineTableName" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableName"></a>

```java
public java.lang.String getBaselineTableName();
```

- *Type:* java.lang.String

---

##### `outputSchemaId`<sup>Required</sup> <a name="outputSchemaId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaId"></a>

```java
public java.lang.String getOutputSchemaId();
```

- *Type:* java.lang.String

---

##### `skipBuiltinDashboard`<sup>Required</sup> <a name="skipBuiltinDashboard" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboard"></a>

```java
public java.lang.Boolean|IResolvable getSkipBuiltinDashboard();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `slicingExprs`<sup>Required</sup> <a name="slicingExprs" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprs"></a>

```java
public java.util.List<java.lang.String> getSlicingExprs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorDataProfilingConfig getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfig">DataDatabricksDataQualityMonitorDataProfilingConfig</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference;

new DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.pauseStatus">pauseStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput">quartzCronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneIdInput">timezoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpression">quartzCronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pauseStatus`<sup>Required</sup> <a name="pauseStatus" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.pauseStatus"></a>

```java
public java.lang.String getPauseStatus();
```

- *Type:* java.lang.String

---

##### `quartzCronExpressionInput`<sup>Optional</sup> <a name="quartzCronExpressionInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput"></a>

```java
public java.lang.String getQuartzCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneIdInput"></a>

```java
public java.lang.String getTimezoneIdInput();
```

- *Type:* java.lang.String

---

##### `quartzCronExpression`<sup>Required</sup> <a name="quartzCronExpression" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpression"></a>

```java
public java.lang.String getQuartzCronExpression();
```

- *Type:* java.lang.String

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorDataProfilingConfigSchedule getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorDataProfilingConfigSchedule</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference;

new DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorDataProfilingConfigSnapshot</a>

---


### DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference <a name="DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_data_quality_monitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference;

new DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput">granularitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput">timestampColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn">timestampColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `granularitiesInput`<sup>Optional</sup> <a name="granularitiesInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput"></a>

```java
public java.util.List<java.lang.String> getGranularitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timestampColumnInput`<sup>Optional</sup> <a name="timestampColumnInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput"></a>

```java
public java.lang.String getTimestampColumnInput();
```

- *Type:* java.lang.String

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timestampColumn`<sup>Required</sup> <a name="timestampColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn"></a>

```java
public java.lang.String getTimestampColumn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitor.DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorDataProfilingConfigTimeSeries</a>

---



