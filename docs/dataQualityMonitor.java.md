# `dataQualityMonitor` Submodule <a name="`dataQualityMonitor` Submodule" id="@cdktf/provider-databricks.dataQualityMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataQualityMonitor <a name="DataQualityMonitor" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor databricks_data_quality_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitor;

DataQualityMonitor.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .objectId(java.lang.String)
    .objectType(java.lang.String)
//  .anomalyDetectionConfig(DataQualityMonitorAnomalyDetectionConfig)
//  .dataProfilingConfig(DataQualityMonitorDataProfilingConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#object_id DataQualityMonitor#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.objectType">objectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#object_type DataQualityMonitor#object_type}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.anomalyDetectionConfig">anomalyDetectionConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#anomaly_detection_config DataQualityMonitor#anomaly_detection_config}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.dataProfilingConfig">dataProfilingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#data_profiling_config DataQualityMonitor#data_profiling_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#object_id DataQualityMonitor#object_id}.

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.objectType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#object_type DataQualityMonitor#object_type}.

---

##### `anomalyDetectionConfig`<sup>Optional</sup> <a name="anomalyDetectionConfig" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.anomalyDetectionConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#anomaly_detection_config DataQualityMonitor#anomaly_detection_config}.

---

##### `dataProfilingConfig`<sup>Optional</sup> <a name="dataProfilingConfig" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.Initializer.parameter.dataProfilingConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#data_profiling_config DataQualityMonitor#data_profiling_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.putAnomalyDetectionConfig">putAnomalyDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.putDataProfilingConfig">putDataProfilingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.resetAnomalyDetectionConfig">resetAnomalyDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.resetDataProfilingConfig">resetDataProfilingConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnomalyDetectionConfig` <a name="putAnomalyDetectionConfig" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.putAnomalyDetectionConfig"></a>

```java
public void putAnomalyDetectionConfig(DataQualityMonitorAnomalyDetectionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.putAnomalyDetectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a>

---

##### `putDataProfilingConfig` <a name="putDataProfilingConfig" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.putDataProfilingConfig"></a>

```java
public void putDataProfilingConfig(DataQualityMonitorDataProfilingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.putDataProfilingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a>

---

##### `resetAnomalyDetectionConfig` <a name="resetAnomalyDetectionConfig" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.resetAnomalyDetectionConfig"></a>

```java
public void resetAnomalyDetectionConfig()
```

##### `resetDataProfilingConfig` <a name="resetDataProfilingConfig" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.resetDataProfilingConfig"></a>

```java
public void resetDataProfilingConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataQualityMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitor;

DataQualityMonitor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitor;

DataQualityMonitor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitor;

DataQualityMonitor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitor;

DataQualityMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataQualityMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataQualityMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataQualityMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataQualityMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataQualityMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.anomalyDetectionConfig">anomalyDetectionConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference">DataQualityMonitorAnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.dataProfilingConfig">dataProfilingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference">DataQualityMonitorDataProfilingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.anomalyDetectionConfigInput">anomalyDetectionConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.dataProfilingConfigInput">dataProfilingConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectTypeInput">objectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `anomalyDetectionConfig`<sup>Required</sup> <a name="anomalyDetectionConfig" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.anomalyDetectionConfig"></a>

```java
public DataQualityMonitorAnomalyDetectionConfigOutputReference getAnomalyDetectionConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference">DataQualityMonitorAnomalyDetectionConfigOutputReference</a>

---

##### `dataProfilingConfig`<sup>Required</sup> <a name="dataProfilingConfig" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.dataProfilingConfig"></a>

```java
public DataQualityMonitorDataProfilingConfigOutputReference getDataProfilingConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference">DataQualityMonitorDataProfilingConfigOutputReference</a>

---

##### `anomalyDetectionConfigInput`<sup>Optional</sup> <a name="anomalyDetectionConfigInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.anomalyDetectionConfigInput"></a>

```java
public IResolvable|DataQualityMonitorAnomalyDetectionConfig getAnomalyDetectionConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a>

---

##### `dataProfilingConfigInput`<sup>Optional</sup> <a name="dataProfilingConfigInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.dataProfilingConfigInput"></a>

```java
public IResolvable|DataQualityMonitorDataProfilingConfig getDataProfilingConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a>

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectTypeInput"></a>

```java
public java.lang.String getObjectTypeInput();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataQualityMonitorAnomalyDetectionConfig <a name="DataQualityMonitorAnomalyDetectionConfig" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorAnomalyDetectionConfig;

DataQualityMonitorAnomalyDetectionConfig.builder()
    .build();
```


### DataQualityMonitorConfig <a name="DataQualityMonitorConfig" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorConfig;

DataQualityMonitorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .objectId(java.lang.String)
    .objectType(java.lang.String)
//  .anomalyDetectionConfig(DataQualityMonitorAnomalyDetectionConfig)
//  .dataProfilingConfig(DataQualityMonitorDataProfilingConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#object_id DataQualityMonitor#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.objectType">objectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#object_type DataQualityMonitor#object_type}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.anomalyDetectionConfig">anomalyDetectionConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#anomaly_detection_config DataQualityMonitor#anomaly_detection_config}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.dataProfilingConfig">dataProfilingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#data_profiling_config DataQualityMonitor#data_profiling_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#object_id DataQualityMonitor#object_id}.

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#object_type DataQualityMonitor#object_type}.

---

##### `anomalyDetectionConfig`<sup>Optional</sup> <a name="anomalyDetectionConfig" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.anomalyDetectionConfig"></a>

```java
public DataQualityMonitorAnomalyDetectionConfig getAnomalyDetectionConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#anomaly_detection_config DataQualityMonitor#anomaly_detection_config}.

---

##### `dataProfilingConfig`<sup>Optional</sup> <a name="dataProfilingConfig" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorConfig.property.dataProfilingConfig"></a>

```java
public DataQualityMonitorDataProfilingConfig getDataProfilingConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#data_profiling_config DataQualityMonitor#data_profiling_config}.

---

### DataQualityMonitorDataProfilingConfig <a name="DataQualityMonitorDataProfilingConfig" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfig;

DataQualityMonitorDataProfilingConfig.builder()
    .outputSchemaId(java.lang.String)
//  .assetsDir(java.lang.String)
//  .baselineTableName(java.lang.String)
//  .customMetrics(IResolvable|java.util.List<DataQualityMonitorDataProfilingConfigCustomMetrics>)
//  .inferenceLog(DataQualityMonitorDataProfilingConfigInferenceLog)
//  .notificationSettings(DataQualityMonitorDataProfilingConfigNotificationSettings)
//  .schedule(DataQualityMonitorDataProfilingConfigSchedule)
//  .skipBuiltinDashboard(java.lang.Boolean|IResolvable)
//  .slicingExprs(java.util.List<java.lang.String>)
//  .snapshot(DataQualityMonitorDataProfilingConfigSnapshot)
//  .timeSeries(DataQualityMonitorDataProfilingConfigTimeSeries)
//  .warehouseId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.outputSchemaId">outputSchemaId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#output_schema_id DataQualityMonitor#output_schema_id}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.assetsDir">assetsDir</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#assets_dir DataQualityMonitor#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.baselineTableName">baselineTableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#baseline_table_name DataQualityMonitor#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.customMetrics">customMetrics</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#custom_metrics DataQualityMonitor#custom_metrics}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog">DataQualityMonitorDataProfilingConfigInferenceLog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#inference_log DataQualityMonitor#inference_log}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings">DataQualityMonitorDataProfilingConfigNotificationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#notification_settings DataQualityMonitor#notification_settings}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule">DataQualityMonitorDataProfilingConfigSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#schedule DataQualityMonitor#schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#skip_builtin_dashboard DataQualityMonitor#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.slicingExprs">slicingExprs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#slicing_exprs DataQualityMonitor#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot">DataQualityMonitorDataProfilingConfigSnapshot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#snapshot DataQualityMonitor#snapshot}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.timeSeries">timeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries">DataQualityMonitorDataProfilingConfigTimeSeries</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#time_series DataQualityMonitor#time_series}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#warehouse_id DataQualityMonitor#warehouse_id}. |

---

##### `outputSchemaId`<sup>Required</sup> <a name="outputSchemaId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.outputSchemaId"></a>

```java
public java.lang.String getOutputSchemaId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#output_schema_id DataQualityMonitor#output_schema_id}.

---

##### `assetsDir`<sup>Optional</sup> <a name="assetsDir" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.assetsDir"></a>

```java
public java.lang.String getAssetsDir();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#assets_dir DataQualityMonitor#assets_dir}.

---

##### `baselineTableName`<sup>Optional</sup> <a name="baselineTableName" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.baselineTableName"></a>

```java
public java.lang.String getBaselineTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#baseline_table_name DataQualityMonitor#baseline_table_name}.

---

##### `customMetrics`<sup>Optional</sup> <a name="customMetrics" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.customMetrics"></a>

```java
public IResolvable|java.util.List<DataQualityMonitorDataProfilingConfigCustomMetrics> getCustomMetrics();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#custom_metrics DataQualityMonitor#custom_metrics}.

---

##### `inferenceLog`<sup>Optional</sup> <a name="inferenceLog" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.inferenceLog"></a>

```java
public DataQualityMonitorDataProfilingConfigInferenceLog getInferenceLog();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog">DataQualityMonitorDataProfilingConfigInferenceLog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#inference_log DataQualityMonitor#inference_log}.

---

##### `notificationSettings`<sup>Optional</sup> <a name="notificationSettings" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.notificationSettings"></a>

```java
public DataQualityMonitorDataProfilingConfigNotificationSettings getNotificationSettings();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings">DataQualityMonitorDataProfilingConfigNotificationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#notification_settings DataQualityMonitor#notification_settings}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.schedule"></a>

```java
public DataQualityMonitorDataProfilingConfigSchedule getSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule">DataQualityMonitorDataProfilingConfigSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#schedule DataQualityMonitor#schedule}.

---

##### `skipBuiltinDashboard`<sup>Optional</sup> <a name="skipBuiltinDashboard" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.skipBuiltinDashboard"></a>

```java
public java.lang.Boolean|IResolvable getSkipBuiltinDashboard();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#skip_builtin_dashboard DataQualityMonitor#skip_builtin_dashboard}.

---

##### `slicingExprs`<sup>Optional</sup> <a name="slicingExprs" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.slicingExprs"></a>

```java
public java.util.List<java.lang.String> getSlicingExprs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#slicing_exprs DataQualityMonitor#slicing_exprs}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.snapshot"></a>

```java
public DataQualityMonitorDataProfilingConfigSnapshot getSnapshot();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot">DataQualityMonitorDataProfilingConfigSnapshot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#snapshot DataQualityMonitor#snapshot}.

---

##### `timeSeries`<sup>Optional</sup> <a name="timeSeries" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.timeSeries"></a>

```java
public DataQualityMonitorDataProfilingConfigTimeSeries getTimeSeries();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries">DataQualityMonitorDataProfilingConfigTimeSeries</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#time_series DataQualityMonitor#time_series}.

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#warehouse_id DataQualityMonitor#warehouse_id}.

---

### DataQualityMonitorDataProfilingConfigCustomMetrics <a name="DataQualityMonitorDataProfilingConfigCustomMetrics" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigCustomMetrics;

DataQualityMonitorDataProfilingConfigCustomMetrics.builder()
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
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#definition DataQualityMonitor#definition}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.inputColumns">inputColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#input_columns DataQualityMonitor#input_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#name DataQualityMonitor#name}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.outputDataType">outputDataType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#output_data_type DataQualityMonitor#output_data_type}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#type DataQualityMonitor#type}. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#definition DataQualityMonitor#definition}.

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.inputColumns"></a>

```java
public java.util.List<java.lang.String> getInputColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#input_columns DataQualityMonitor#input_columns}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#name DataQualityMonitor#name}.

---

##### `outputDataType`<sup>Required</sup> <a name="outputDataType" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.outputDataType"></a>

```java
public java.lang.String getOutputDataType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#output_data_type DataQualityMonitor#output_data_type}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#type DataQualityMonitor#type}.

---

### DataQualityMonitorDataProfilingConfigInferenceLog <a name="DataQualityMonitorDataProfilingConfigInferenceLog" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigInferenceLog;

DataQualityMonitorDataProfilingConfigInferenceLog.builder()
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
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#granularities DataQualityMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.modelIdColumn">modelIdColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#model_id_column DataQualityMonitor#model_id_column}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.predictionColumn">predictionColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#prediction_column DataQualityMonitor#prediction_column}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.problemType">problemType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#problem_type DataQualityMonitor#problem_type}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.timestampColumn">timestampColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#timestamp_column DataQualityMonitor#timestamp_column}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.labelColumn">labelColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#label_column DataQualityMonitor#label_column}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#granularities DataQualityMonitor#granularities}.

---

##### `modelIdColumn`<sup>Required</sup> <a name="modelIdColumn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.modelIdColumn"></a>

```java
public java.lang.String getModelIdColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#model_id_column DataQualityMonitor#model_id_column}.

---

##### `predictionColumn`<sup>Required</sup> <a name="predictionColumn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.predictionColumn"></a>

```java
public java.lang.String getPredictionColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#prediction_column DataQualityMonitor#prediction_column}.

---

##### `problemType`<sup>Required</sup> <a name="problemType" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.problemType"></a>

```java
public java.lang.String getProblemType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#problem_type DataQualityMonitor#problem_type}.

---

##### `timestampColumn`<sup>Required</sup> <a name="timestampColumn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.timestampColumn"></a>

```java
public java.lang.String getTimestampColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#timestamp_column DataQualityMonitor#timestamp_column}.

---

##### `labelColumn`<sup>Optional</sup> <a name="labelColumn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog.property.labelColumn"></a>

```java
public java.lang.String getLabelColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#label_column DataQualityMonitor#label_column}.

---

### DataQualityMonitorDataProfilingConfigNotificationSettings <a name="DataQualityMonitorDataProfilingConfigNotificationSettings" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigNotificationSettings;

DataQualityMonitorDataProfilingConfigNotificationSettings.builder()
//  .onFailure(DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#on_failure DataQualityMonitor#on_failure}. |

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings.property.onFailure"></a>

```java
public DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure getOnFailure();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#on_failure DataQualityMonitor#on_failure}.

---

### DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure <a name="DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure;

DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.builder()
//  .emailAddresses(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#email_addresses DataQualityMonitor#email_addresses}. |

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#email_addresses DataQualityMonitor#email_addresses}.

---

### DataQualityMonitorDataProfilingConfigSchedule <a name="DataQualityMonitorDataProfilingConfigSchedule" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigSchedule;

DataQualityMonitorDataProfilingConfigSchedule.builder()
    .quartzCronExpression(java.lang.String)
    .timezoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule.property.quartzCronExpression">quartzCronExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#quartz_cron_expression DataQualityMonitor#quartz_cron_expression}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#timezone_id DataQualityMonitor#timezone_id}. |

---

##### `quartzCronExpression`<sup>Required</sup> <a name="quartzCronExpression" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule.property.quartzCronExpression"></a>

```java
public java.lang.String getQuartzCronExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#quartz_cron_expression DataQualityMonitor#quartz_cron_expression}.

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#timezone_id DataQualityMonitor#timezone_id}.

---

### DataQualityMonitorDataProfilingConfigSnapshot <a name="DataQualityMonitorDataProfilingConfigSnapshot" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigSnapshot;

DataQualityMonitorDataProfilingConfigSnapshot.builder()
    .build();
```


### DataQualityMonitorDataProfilingConfigTimeSeries <a name="DataQualityMonitorDataProfilingConfigTimeSeries" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigTimeSeries;

DataQualityMonitorDataProfilingConfigTimeSeries.builder()
    .granularities(java.util.List<java.lang.String>)
    .timestampColumn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#granularities DataQualityMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries.property.timestampColumn">timestampColumn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#timestamp_column DataQualityMonitor#timestamp_column}. |

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#granularities DataQualityMonitor#granularities}.

---

##### `timestampColumn`<sup>Required</sup> <a name="timestampColumn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries.property.timestampColumn"></a>

```java
public java.lang.String getTimestampColumn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/data_quality_monitor#timestamp_column DataQualityMonitor#timestamp_column}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataQualityMonitorAnomalyDetectionConfigOutputReference <a name="DataQualityMonitorAnomalyDetectionConfigOutputReference" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorAnomalyDetectionConfigOutputReference;

new DataQualityMonitorAnomalyDetectionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataQualityMonitorAnomalyDetectionConfig getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorAnomalyDetectionConfig">DataQualityMonitorAnomalyDetectionConfig</a>

---


### DataQualityMonitorDataProfilingConfigCustomMetricsList <a name="DataQualityMonitorDataProfilingConfigCustomMetricsList" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigCustomMetricsList;

new DataQualityMonitorDataProfilingConfigCustomMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.get"></a>

```java
public DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataQualityMonitorDataProfilingConfigCustomMetrics> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>>

---


### DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference <a name="DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference;

new DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput">inputColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput">outputDataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumns">inputColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataType">outputDataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `inputColumnsInput`<sup>Optional</sup> <a name="inputColumnsInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput"></a>

```java
public java.util.List<java.lang.String> getInputColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputDataTypeInput`<sup>Optional</sup> <a name="outputDataTypeInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```java
public java.lang.String getOutputDataTypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `inputColumns`<sup>Required</sup> <a name="inputColumns" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.inputColumns"></a>

```java
public java.util.List<java.lang.String> getInputColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputDataType`<sup>Required</sup> <a name="outputDataType" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.outputDataType"></a>

```java
public java.lang.String getOutputDataType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataQualityMonitorDataProfilingConfigCustomMetrics getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>

---


### DataQualityMonitorDataProfilingConfigInferenceLogOutputReference <a name="DataQualityMonitorDataProfilingConfigInferenceLogOutputReference" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference;

new DataQualityMonitorDataProfilingConfigInferenceLogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resetLabelColumn">resetLabelColumn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabelColumn` <a name="resetLabelColumn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.resetLabelColumn"></a>

```java
public void resetLabelColumn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput">granularitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput">labelColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput">modelIdColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput">predictionColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput">problemTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput">timestampColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumn">labelColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn">modelIdColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumn">predictionColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemType">problemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumn">timestampColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog">DataQualityMonitorDataProfilingConfigInferenceLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `granularitiesInput`<sup>Optional</sup> <a name="granularitiesInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput"></a>

```java
public java.util.List<java.lang.String> getGranularitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelColumnInput`<sup>Optional</sup> <a name="labelColumnInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput"></a>

```java
public java.lang.String getLabelColumnInput();
```

- *Type:* java.lang.String

---

##### `modelIdColumnInput`<sup>Optional</sup> <a name="modelIdColumnInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput"></a>

```java
public java.lang.String getModelIdColumnInput();
```

- *Type:* java.lang.String

---

##### `predictionColumnInput`<sup>Optional</sup> <a name="predictionColumnInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput"></a>

```java
public java.lang.String getPredictionColumnInput();
```

- *Type:* java.lang.String

---

##### `problemTypeInput`<sup>Optional</sup> <a name="problemTypeInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput"></a>

```java
public java.lang.String getProblemTypeInput();
```

- *Type:* java.lang.String

---

##### `timestampColumnInput`<sup>Optional</sup> <a name="timestampColumnInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput"></a>

```java
public java.lang.String getTimestampColumnInput();
```

- *Type:* java.lang.String

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelColumn`<sup>Required</sup> <a name="labelColumn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.labelColumn"></a>

```java
public java.lang.String getLabelColumn();
```

- *Type:* java.lang.String

---

##### `modelIdColumn`<sup>Required</sup> <a name="modelIdColumn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn"></a>

```java
public java.lang.String getModelIdColumn();
```

- *Type:* java.lang.String

---

##### `predictionColumn`<sup>Required</sup> <a name="predictionColumn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.predictionColumn"></a>

```java
public java.lang.String getPredictionColumn();
```

- *Type:* java.lang.String

---

##### `problemType`<sup>Required</sup> <a name="problemType" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.problemType"></a>

```java
public java.lang.String getProblemType();
```

- *Type:* java.lang.String

---

##### `timestampColumn`<sup>Required</sup> <a name="timestampColumn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.timestampColumn"></a>

```java
public java.lang.String getTimestampColumn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference.property.internalValue"></a>

```java
public IResolvable|DataQualityMonitorDataProfilingConfigInferenceLog getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog">DataQualityMonitorDataProfilingConfigInferenceLog</a>

---


### DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference <a name="DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference;

new DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses"></a>

```java
public void resetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue"></a>

```java
public IResolvable|DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

---


### DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference <a name="DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference;

new DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.putOnFailure">putOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure">resetOnFailure</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnFailure` <a name="putOnFailure" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.putOnFailure"></a>

```java
public void putOnFailure(DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

---

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure"></a>

```java
public void resetOnFailure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput">onFailureInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings">DataQualityMonitorDataProfilingConfigNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailure"></a>

```java
public DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference getOnFailure();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailureOutputReference</a>

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput"></a>

```java
public IResolvable|DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure getOnFailureInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure">DataQualityMonitorDataProfilingConfigNotificationSettingsOnFailure</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataQualityMonitorDataProfilingConfigNotificationSettings getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings">DataQualityMonitorDataProfilingConfigNotificationSettings</a>

---


### DataQualityMonitorDataProfilingConfigOutputReference <a name="DataQualityMonitorDataProfilingConfigOutputReference" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigOutputReference;

new DataQualityMonitorDataProfilingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putCustomMetrics">putCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog">putInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putNotificationSettings">putNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putSnapshot">putSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries">putTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetAssetsDir">resetAssetsDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetBaselineTableName">resetBaselineTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetCustomMetrics">resetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetInferenceLog">resetInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetNotificationSettings">resetNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSkipBuiltinDashboard">resetSkipBuiltinDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSlicingExprs">resetSlicingExprs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSnapshot">resetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetTimeSeries">resetTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetWarehouseId">resetWarehouseId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomMetrics` <a name="putCustomMetrics" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putCustomMetrics"></a>

```java
public void putCustomMetrics(IResolvable|java.util.List<DataQualityMonitorDataProfilingConfigCustomMetrics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putCustomMetrics.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>>

---

##### `putInferenceLog` <a name="putInferenceLog" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog"></a>

```java
public void putInferenceLog(DataQualityMonitorDataProfilingConfigInferenceLog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putInferenceLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog">DataQualityMonitorDataProfilingConfigInferenceLog</a>

---

##### `putNotificationSettings` <a name="putNotificationSettings" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putNotificationSettings"></a>

```java
public void putNotificationSettings(DataQualityMonitorDataProfilingConfigNotificationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings">DataQualityMonitorDataProfilingConfigNotificationSettings</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putSchedule"></a>

```java
public void putSchedule(DataQualityMonitorDataProfilingConfigSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule">DataQualityMonitorDataProfilingConfigSchedule</a>

---

##### `putSnapshot` <a name="putSnapshot" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putSnapshot"></a>

```java
public void putSnapshot(DataQualityMonitorDataProfilingConfigSnapshot value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot">DataQualityMonitorDataProfilingConfigSnapshot</a>

---

##### `putTimeSeries` <a name="putTimeSeries" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries"></a>

```java
public void putTimeSeries(DataQualityMonitorDataProfilingConfigTimeSeries value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.putTimeSeries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries">DataQualityMonitorDataProfilingConfigTimeSeries</a>

---

##### `resetAssetsDir` <a name="resetAssetsDir" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetAssetsDir"></a>

```java
public void resetAssetsDir()
```

##### `resetBaselineTableName` <a name="resetBaselineTableName" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetBaselineTableName"></a>

```java
public void resetBaselineTableName()
```

##### `resetCustomMetrics` <a name="resetCustomMetrics" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetCustomMetrics"></a>

```java
public void resetCustomMetrics()
```

##### `resetInferenceLog` <a name="resetInferenceLog" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetInferenceLog"></a>

```java
public void resetInferenceLog()
```

##### `resetNotificationSettings` <a name="resetNotificationSettings" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetNotificationSettings"></a>

```java
public void resetNotificationSettings()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetSkipBuiltinDashboard` <a name="resetSkipBuiltinDashboard" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSkipBuiltinDashboard"></a>

```java
public void resetSkipBuiltinDashboard()
```

##### `resetSlicingExprs` <a name="resetSlicingExprs" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSlicingExprs"></a>

```java
public void resetSlicingExprs()
```

##### `resetSnapshot` <a name="resetSnapshot" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetSnapshot"></a>

```java
public void resetSnapshot()
```

##### `resetTimeSeries` <a name="resetTimeSeries" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetTimeSeries"></a>

```java
public void resetTimeSeries()
```

##### `resetWarehouseId` <a name="resetWarehouseId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.resetWarehouseId"></a>

```java
public void resetWarehouseId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.customMetrics">customMetrics</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList">DataQualityMonitorDataProfilingConfigCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.driftMetricsTableName">driftMetricsTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.effectiveWarehouseId">effectiveWarehouseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLog">inferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference">DataQualityMonitorDataProfilingConfigInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.latestMonitorFailureMessage">latestMonitorFailureMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.monitoredTableName">monitoredTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.monitorVersion">monitorVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference">DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.profileMetricsTableName">profileMetricsTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference">DataQualityMonitorDataProfilingConfigScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.snapshot">snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference">DataQualityMonitorDataProfilingConfigSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.timeSeries">timeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference">DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.assetsDirInput">assetsDirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableNameInput">baselineTableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.customMetricsInput">customMetricsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLogInput">inferenceLogInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog">DataQualityMonitorDataProfilingConfigInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettingsInput">notificationSettingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings">DataQualityMonitorDataProfilingConfigNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaIdInput">outputSchemaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule">DataQualityMonitorDataProfilingConfigSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput">skipBuiltinDashboardInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprsInput">slicingExprsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.snapshotInput">snapshotInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot">DataQualityMonitorDataProfilingConfigSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.timeSeriesInput">timeSeriesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries">DataQualityMonitorDataProfilingConfigTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.warehouseIdInput">warehouseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.assetsDir">assetsDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableName">baselineTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaId">outputSchemaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboard">skipBuiltinDashboard</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprs">slicingExprs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.warehouseId">warehouseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customMetrics`<sup>Required</sup> <a name="customMetrics" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.customMetrics"></a>

```java
public DataQualityMonitorDataProfilingConfigCustomMetricsList getCustomMetrics();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetricsList">DataQualityMonitorDataProfilingConfigCustomMetricsList</a>

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.dashboardId"></a>

```java
public java.lang.String getDashboardId();
```

- *Type:* java.lang.String

---

##### `driftMetricsTableName`<sup>Required</sup> <a name="driftMetricsTableName" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.driftMetricsTableName"></a>

```java
public java.lang.String getDriftMetricsTableName();
```

- *Type:* java.lang.String

---

##### `effectiveWarehouseId`<sup>Required</sup> <a name="effectiveWarehouseId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.effectiveWarehouseId"></a>

```java
public java.lang.String getEffectiveWarehouseId();
```

- *Type:* java.lang.String

---

##### `inferenceLog`<sup>Required</sup> <a name="inferenceLog" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLog"></a>

```java
public DataQualityMonitorDataProfilingConfigInferenceLogOutputReference getInferenceLog();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLogOutputReference">DataQualityMonitorDataProfilingConfigInferenceLogOutputReference</a>

---

##### `latestMonitorFailureMessage`<sup>Required</sup> <a name="latestMonitorFailureMessage" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.latestMonitorFailureMessage"></a>

```java
public java.lang.String getLatestMonitorFailureMessage();
```

- *Type:* java.lang.String

---

##### `monitoredTableName`<sup>Required</sup> <a name="monitoredTableName" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.monitoredTableName"></a>

```java
public java.lang.String getMonitoredTableName();
```

- *Type:* java.lang.String

---

##### `monitorVersion`<sup>Required</sup> <a name="monitorVersion" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.monitorVersion"></a>

```java
public java.lang.Number getMonitorVersion();
```

- *Type:* java.lang.Number

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettings"></a>

```java
public DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference getNotificationSettings();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference">DataQualityMonitorDataProfilingConfigNotificationSettingsOutputReference</a>

---

##### `profileMetricsTableName`<sup>Required</sup> <a name="profileMetricsTableName" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.profileMetricsTableName"></a>

```java
public java.lang.String getProfileMetricsTableName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.schedule"></a>

```java
public DataQualityMonitorDataProfilingConfigScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference">DataQualityMonitorDataProfilingConfigScheduleOutputReference</a>

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.snapshot"></a>

```java
public DataQualityMonitorDataProfilingConfigSnapshotOutputReference getSnapshot();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference">DataQualityMonitorDataProfilingConfigSnapshotOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeSeries`<sup>Required</sup> <a name="timeSeries" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.timeSeries"></a>

```java
public DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference getTimeSeries();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference">DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference</a>

---

##### `assetsDirInput`<sup>Optional</sup> <a name="assetsDirInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.assetsDirInput"></a>

```java
public java.lang.String getAssetsDirInput();
```

- *Type:* java.lang.String

---

##### `baselineTableNameInput`<sup>Optional</sup> <a name="baselineTableNameInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableNameInput"></a>

```java
public java.lang.String getBaselineTableNameInput();
```

- *Type:* java.lang.String

---

##### `customMetricsInput`<sup>Optional</sup> <a name="customMetricsInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.customMetricsInput"></a>

```java
public IResolvable|java.util.List<DataQualityMonitorDataProfilingConfigCustomMetrics> getCustomMetricsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigCustomMetrics">DataQualityMonitorDataProfilingConfigCustomMetrics</a>>

---

##### `inferenceLogInput`<sup>Optional</sup> <a name="inferenceLogInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.inferenceLogInput"></a>

```java
public IResolvable|DataQualityMonitorDataProfilingConfigInferenceLog getInferenceLogInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigInferenceLog">DataQualityMonitorDataProfilingConfigInferenceLog</a>

---

##### `notificationSettingsInput`<sup>Optional</sup> <a name="notificationSettingsInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.notificationSettingsInput"></a>

```java
public IResolvable|DataQualityMonitorDataProfilingConfigNotificationSettings getNotificationSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigNotificationSettings">DataQualityMonitorDataProfilingConfigNotificationSettings</a>

---

##### `outputSchemaIdInput`<sup>Optional</sup> <a name="outputSchemaIdInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaIdInput"></a>

```java
public java.lang.String getOutputSchemaIdInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.scheduleInput"></a>

```java
public IResolvable|DataQualityMonitorDataProfilingConfigSchedule getScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule">DataQualityMonitorDataProfilingConfigSchedule</a>

---

##### `skipBuiltinDashboardInput`<sup>Optional</sup> <a name="skipBuiltinDashboardInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipBuiltinDashboardInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `slicingExprsInput`<sup>Optional</sup> <a name="slicingExprsInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprsInput"></a>

```java
public java.util.List<java.lang.String> getSlicingExprsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotInput`<sup>Optional</sup> <a name="snapshotInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.snapshotInput"></a>

```java
public IResolvable|DataQualityMonitorDataProfilingConfigSnapshot getSnapshotInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot">DataQualityMonitorDataProfilingConfigSnapshot</a>

---

##### `timeSeriesInput`<sup>Optional</sup> <a name="timeSeriesInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.timeSeriesInput"></a>

```java
public IResolvable|DataQualityMonitorDataProfilingConfigTimeSeries getTimeSeriesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries">DataQualityMonitorDataProfilingConfigTimeSeries</a>

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.warehouseIdInput"></a>

```java
public java.lang.String getWarehouseIdInput();
```

- *Type:* java.lang.String

---

##### `assetsDir`<sup>Required</sup> <a name="assetsDir" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.assetsDir"></a>

```java
public java.lang.String getAssetsDir();
```

- *Type:* java.lang.String

---

##### `baselineTableName`<sup>Required</sup> <a name="baselineTableName" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.baselineTableName"></a>

```java
public java.lang.String getBaselineTableName();
```

- *Type:* java.lang.String

---

##### `outputSchemaId`<sup>Required</sup> <a name="outputSchemaId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.outputSchemaId"></a>

```java
public java.lang.String getOutputSchemaId();
```

- *Type:* java.lang.String

---

##### `skipBuiltinDashboard`<sup>Required</sup> <a name="skipBuiltinDashboard" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.skipBuiltinDashboard"></a>

```java
public java.lang.Boolean|IResolvable getSkipBuiltinDashboard();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `slicingExprs`<sup>Required</sup> <a name="slicingExprs" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.slicingExprs"></a>

```java
public java.util.List<java.lang.String> getSlicingExprs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.warehouseId"></a>

```java
public java.lang.String getWarehouseId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataQualityMonitorDataProfilingConfig getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfig">DataQualityMonitorDataProfilingConfig</a>

---


### DataQualityMonitorDataProfilingConfigScheduleOutputReference <a name="DataQualityMonitorDataProfilingConfigScheduleOutputReference" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference;

new DataQualityMonitorDataProfilingConfigScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.pauseStatus">pauseStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput">quartzCronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneIdInput">timezoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpression">quartzCronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneId">timezoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule">DataQualityMonitorDataProfilingConfigSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pauseStatus`<sup>Required</sup> <a name="pauseStatus" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.pauseStatus"></a>

```java
public java.lang.String getPauseStatus();
```

- *Type:* java.lang.String

---

##### `quartzCronExpressionInput`<sup>Optional</sup> <a name="quartzCronExpressionInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput"></a>

```java
public java.lang.String getQuartzCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneIdInput"></a>

```java
public java.lang.String getTimezoneIdInput();
```

- *Type:* java.lang.String

---

##### `quartzCronExpression`<sup>Required</sup> <a name="quartzCronExpression" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.quartzCronExpression"></a>

```java
public java.lang.String getQuartzCronExpression();
```

- *Type:* java.lang.String

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.timezoneId"></a>

```java
public java.lang.String getTimezoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|DataQualityMonitorDataProfilingConfigSchedule getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSchedule">DataQualityMonitorDataProfilingConfigSchedule</a>

---


### DataQualityMonitorDataProfilingConfigSnapshotOutputReference <a name="DataQualityMonitorDataProfilingConfigSnapshotOutputReference" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference;

new DataQualityMonitorDataProfilingConfigSnapshotOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot">DataQualityMonitorDataProfilingConfigSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshotOutputReference.property.internalValue"></a>

```java
public IResolvable|DataQualityMonitorDataProfilingConfigSnapshot getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigSnapshot">DataQualityMonitorDataProfilingConfigSnapshot</a>

---


### DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference <a name="DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_quality_monitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference;

new DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput">granularitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput">timestampColumnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularities">granularities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn">timestampColumn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries">DataQualityMonitorDataProfilingConfigTimeSeries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `granularitiesInput`<sup>Optional</sup> <a name="granularitiesInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput"></a>

```java
public java.util.List<java.lang.String> getGranularitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timestampColumnInput`<sup>Optional</sup> <a name="timestampColumnInput" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput"></a>

```java
public java.lang.String getTimestampColumnInput();
```

- *Type:* java.lang.String

---

##### `granularities`<sup>Required</sup> <a name="granularities" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.granularities"></a>

```java
public java.util.List<java.lang.String> getGranularities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timestampColumn`<sup>Required</sup> <a name="timestampColumn" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn"></a>

```java
public java.lang.String getTimestampColumn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeriesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataQualityMonitorDataProfilingConfigTimeSeries getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataQualityMonitor.DataQualityMonitorDataProfilingConfigTimeSeries">DataQualityMonitorDataProfilingConfigTimeSeries</a>

---



