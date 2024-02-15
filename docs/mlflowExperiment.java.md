# `mlflowExperiment` Submodule <a name="`mlflowExperiment` Submodule" id="@cdktf/provider-databricks.mlflowExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MlflowExperiment <a name="MlflowExperiment" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment databricks_mlflow_experiment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_experiment.MlflowExperiment;

MlflowExperiment.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .artifactLocation(java.lang.String)
//  .creationTime(java.lang.Number)
//  .description(java.lang.String)
//  .experimentId(java.lang.String)
//  .id(java.lang.String)
//  .lastUpdateTime(java.lang.Number)
//  .lifecycleStage(java.lang.String)
//  .timeouts(MlflowExperimentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#name MlflowExperiment#name}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.artifactLocation">artifactLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#description MlflowExperiment#description}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.experimentId">experimentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#id MlflowExperiment#id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lastUpdateTime">lastUpdateTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lifecycleStage">lifecycleStage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#name MlflowExperiment#name}.

---

##### `artifactLocation`<sup>Optional</sup> <a name="artifactLocation" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.artifactLocation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.creationTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#description MlflowExperiment#description}.

---

##### `experimentId`<sup>Optional</sup> <a name="experimentId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.experimentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#id MlflowExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="lastUpdateTime" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lastUpdateTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}.

---

##### `lifecycleStage`<sup>Optional</sup> <a name="lifecycleStage" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lifecycleStage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#timeouts MlflowExperiment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetArtifactLocation">resetArtifactLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetExperimentId">resetExperimentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetLastUpdateTime">resetLastUpdateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetLifecycleStage">resetLifecycleStage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.putTimeouts"></a>

```java
public void putTimeouts(MlflowExperimentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>

---

##### `resetArtifactLocation` <a name="resetArtifactLocation" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetArtifactLocation"></a>

```java
public void resetArtifactLocation()
```

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetCreationTime"></a>

```java
public void resetCreationTime()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExperimentId` <a name="resetExperimentId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetExperimentId"></a>

```java
public void resetExperimentId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetId"></a>

```java
public void resetId()
```

##### `resetLastUpdateTime` <a name="resetLastUpdateTime" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetLastUpdateTime"></a>

```java
public void resetLastUpdateTime()
```

##### `resetLifecycleStage` <a name="resetLifecycleStage" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetLifecycleStage"></a>

```java
public void resetLifecycleStage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MlflowExperiment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_experiment.MlflowExperiment;

MlflowExperiment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_experiment.MlflowExperiment;

MlflowExperiment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_experiment.MlflowExperiment;

MlflowExperiment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_experiment.MlflowExperiment;

MlflowExperiment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MlflowExperiment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MlflowExperiment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MlflowExperiment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MlflowExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MlflowExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference">MlflowExperimentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocationInput">artifactLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTimeInput">creationTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentIdInput">experimentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTimeInput">lastUpdateTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStageInput">lifecycleStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocation">artifactLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentId">experimentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTime">lastUpdateTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStage">lifecycleStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeouts"></a>

```java
public MlflowExperimentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference">MlflowExperimentTimeoutsOutputReference</a>

---

##### `artifactLocationInput`<sup>Optional</sup> <a name="artifactLocationInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocationInput"></a>

```java
public java.lang.String getArtifactLocationInput();
```

- *Type:* java.lang.String

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTimeInput"></a>

```java
public java.lang.Number getCreationTimeInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `experimentIdInput`<sup>Optional</sup> <a name="experimentIdInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentIdInput"></a>

```java
public java.lang.String getExperimentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lastUpdateTimeInput`<sup>Optional</sup> <a name="lastUpdateTimeInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTimeInput"></a>

```java
public java.lang.Number getLastUpdateTimeInput();
```

- *Type:* java.lang.Number

---

##### `lifecycleStageInput`<sup>Optional</sup> <a name="lifecycleStageInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStageInput"></a>

```java
public java.lang.String getLifecycleStageInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>

---

##### `artifactLocation`<sup>Required</sup> <a name="artifactLocation" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocation"></a>

```java
public java.lang.String getArtifactLocation();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `experimentId`<sup>Required</sup> <a name="experimentId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentId"></a>

```java
public java.lang.String getExperimentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTime"></a>

```java
public java.lang.Number getLastUpdateTime();
```

- *Type:* java.lang.Number

---

##### `lifecycleStage`<sup>Required</sup> <a name="lifecycleStage" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStage"></a>

```java
public java.lang.String getLifecycleStage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MlflowExperimentConfig <a name="MlflowExperimentConfig" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_experiment.MlflowExperimentConfig;

MlflowExperimentConfig.builder()
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
    .name(java.lang.String)
//  .artifactLocation(java.lang.String)
//  .creationTime(java.lang.Number)
//  .description(java.lang.String)
//  .experimentId(java.lang.String)
//  .id(java.lang.String)
//  .lastUpdateTime(java.lang.Number)
//  .lifecycleStage(java.lang.String)
//  .timeouts(MlflowExperimentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#name MlflowExperiment#name}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.artifactLocation">artifactLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#description MlflowExperiment#description}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.experimentId">experimentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#id MlflowExperiment#id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lastUpdateTime">lastUpdateTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycleStage">lifecycleStage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#name MlflowExperiment#name}.

---

##### `artifactLocation`<sup>Optional</sup> <a name="artifactLocation" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.artifactLocation"></a>

```java
public java.lang.String getArtifactLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#description MlflowExperiment#description}.

---

##### `experimentId`<sup>Optional</sup> <a name="experimentId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.experimentId"></a>

```java
public java.lang.String getExperimentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#id MlflowExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="lastUpdateTime" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lastUpdateTime"></a>

```java
public java.lang.Number getLastUpdateTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}.

---

##### `lifecycleStage`<sup>Optional</sup> <a name="lifecycleStage" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycleStage"></a>

```java
public java.lang.String getLifecycleStage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.timeouts"></a>

```java
public MlflowExperimentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/mlflow_experiment#timeouts MlflowExperiment#timeouts}

---

### MlflowExperimentTimeouts <a name="MlflowExperimentTimeouts" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_experiment.MlflowExperimentTimeouts;

MlflowExperimentTimeouts.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### MlflowExperimentTimeoutsOutputReference <a name="MlflowExperimentTimeoutsOutputReference" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_experiment.MlflowExperimentTimeoutsOutputReference;

new MlflowExperimentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>

---



