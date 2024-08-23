# `mlflowWebhook` Submodule <a name="`mlflowWebhook` Submodule" id="@cdktf/provider-databricks.mlflowWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MlflowWebhook <a name="MlflowWebhook" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook databricks_mlflow_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_webhook.MlflowWebhook;

MlflowWebhook.Builder.create(Construct scope, java.lang.String id)
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
    .events(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .httpUrlSpec(MlflowWebhookHttpUrlSpec)
//  .id(java.lang.String)
//  .jobSpec(MlflowWebhookJobSpec)
//  .modelName(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.events">events</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.httpUrlSpec">httpUrlSpec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | http_url_spec block. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.jobSpec">jobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | job_spec block. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.modelName">modelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.events"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}.

---

##### `httpUrlSpec`<sup>Optional</sup> <a name="httpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.httpUrlSpec"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

http_url_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#http_url_spec MlflowWebhook#http_url_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobSpec`<sup>Optional</sup> <a name="jobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.jobSpec"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

job_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#job_spec MlflowWebhook#job_spec}

---

##### `modelName`<sup>Optional</sup> <a name="modelName" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.modelName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec">putHttpUrlSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec">putJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetHttpUrlSpec">resetHttpUrlSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetJobSpec">resetJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetModelName">resetModelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHttpUrlSpec` <a name="putHttpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec"></a>

```java
public void putHttpUrlSpec(MlflowWebhookHttpUrlSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

---

##### `putJobSpec` <a name="putJobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec"></a>

```java
public void putJobSpec(MlflowWebhookJobSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHttpUrlSpec` <a name="resetHttpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetHttpUrlSpec"></a>

```java
public void resetHttpUrlSpec()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetId"></a>

```java
public void resetId()
```

##### `resetJobSpec` <a name="resetJobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetJobSpec"></a>

```java
public void resetJobSpec()
```

##### `resetModelName` <a name="resetModelName" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetModelName"></a>

```java
public void resetModelName()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MlflowWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_webhook.MlflowWebhook;

MlflowWebhook.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_webhook.MlflowWebhook;

MlflowWebhook.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_webhook.MlflowWebhook;

MlflowWebhook.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_webhook.MlflowWebhook;

MlflowWebhook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MlflowWebhook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MlflowWebhook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MlflowWebhook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MlflowWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MlflowWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpec">httpUrlSpec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference">MlflowWebhookHttpUrlSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpec">jobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference">MlflowWebhookJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpecInput">httpUrlSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpecInput">jobSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelNameInput">modelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelName">modelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `httpUrlSpec`<sup>Required</sup> <a name="httpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpec"></a>

```java
public MlflowWebhookHttpUrlSpecOutputReference getHttpUrlSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference">MlflowWebhookHttpUrlSpecOutputReference</a>

---

##### `jobSpec`<sup>Required</sup> <a name="jobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpec"></a>

```java
public MlflowWebhookJobSpecOutputReference getJobSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference">MlflowWebhookJobSpecOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpUrlSpecInput`<sup>Optional</sup> <a name="httpUrlSpecInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpecInput"></a>

```java
public MlflowWebhookHttpUrlSpec getHttpUrlSpecInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jobSpecInput`<sup>Optional</sup> <a name="jobSpecInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpecInput"></a>

```java
public MlflowWebhookJobSpec getJobSpecInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelNameInput"></a>

```java
public java.lang.String getModelNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MlflowWebhookConfig <a name="MlflowWebhookConfig" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_webhook.MlflowWebhookConfig;

MlflowWebhookConfig.builder()
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
    .events(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .httpUrlSpec(MlflowWebhookHttpUrlSpec)
//  .id(java.lang.String)
//  .jobSpec(MlflowWebhookJobSpec)
//  .modelName(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.httpUrlSpec">httpUrlSpec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | http_url_spec block. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.jobSpec">jobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | job_spec block. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.modelName">modelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}.

---

##### `httpUrlSpec`<sup>Optional</sup> <a name="httpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.httpUrlSpec"></a>

```java
public MlflowWebhookHttpUrlSpec getHttpUrlSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

http_url_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#http_url_spec MlflowWebhook#http_url_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobSpec`<sup>Optional</sup> <a name="jobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.jobSpec"></a>

```java
public MlflowWebhookJobSpec getJobSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

job_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#job_spec MlflowWebhook#job_spec}

---

##### `modelName`<sup>Optional</sup> <a name="modelName" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}.

---

### MlflowWebhookHttpUrlSpec <a name="MlflowWebhookHttpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_webhook.MlflowWebhookHttpUrlSpec;

MlflowWebhookHttpUrlSpec.builder()
    .url(java.lang.String)
//  .authorization(java.lang.String)
//  .enableSslVerification(java.lang.Boolean)
//  .enableSslVerification(IResolvable)
//  .secret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#url MlflowWebhook#url}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#authorization MlflowWebhook#authorization}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.enableSslVerification">enableSslVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#enable_ssl_verification MlflowWebhook#enable_ssl_verification}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.secret">secret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#secret MlflowWebhook#secret}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#url MlflowWebhook#url}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#authorization MlflowWebhook#authorization}.

---

##### `enableSslVerification`<sup>Optional</sup> <a name="enableSslVerification" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.enableSslVerification"></a>

```java
public java.lang.Object getEnableSslVerification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#enable_ssl_verification MlflowWebhook#enable_ssl_verification}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#secret MlflowWebhook#secret}.

---

### MlflowWebhookJobSpec <a name="MlflowWebhookJobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_webhook.MlflowWebhookJobSpec;

MlflowWebhookJobSpec.builder()
    .accessToken(java.lang.String)
    .jobId(java.lang.String)
//  .workspaceUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#access_token MlflowWebhook#access_token}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.jobId">jobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#job_id MlflowWebhook#job_id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.workspaceUrl">workspaceUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#workspace_url MlflowWebhook#workspace_url}. |

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#access_token MlflowWebhook#access_token}.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#job_id MlflowWebhook#job_id}.

---

##### `workspaceUrl`<sup>Optional</sup> <a name="workspaceUrl" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.workspaceUrl"></a>

```java
public java.lang.String getWorkspaceUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#workspace_url MlflowWebhook#workspace_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### MlflowWebhookHttpUrlSpecOutputReference <a name="MlflowWebhookHttpUrlSpecOutputReference" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_webhook.MlflowWebhookHttpUrlSpecOutputReference;

new MlflowWebhookHttpUrlSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetEnableSslVerification">resetEnableSslVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetEnableSslVerification` <a name="resetEnableSslVerification" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetEnableSslVerification"></a>

```java
public void resetEnableSslVerification()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetSecret"></a>

```java
public void resetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerificationInput">enableSslVerificationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerification">enableSslVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `enableSslVerificationInput`<sup>Optional</sup> <a name="enableSslVerificationInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerificationInput"></a>

```java
public java.lang.Object getEnableSslVerificationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `enableSslVerification`<sup>Required</sup> <a name="enableSslVerification" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerification"></a>

```java
public java.lang.Object getEnableSslVerification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.internalValue"></a>

```java
public MlflowWebhookHttpUrlSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

---


### MlflowWebhookJobSpecOutputReference <a name="MlflowWebhookJobSpecOutputReference" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mlflow_webhook.MlflowWebhookJobSpecOutputReference;

new MlflowWebhookJobSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resetWorkspaceUrl">resetWorkspaceUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceUrl` <a name="resetWorkspaceUrl" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resetWorkspaceUrl"></a>

```java
public void resetWorkspaceUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobIdInput">jobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrlInput">workspaceUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrl">workspaceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessTokenInput"></a>

```java
public java.lang.String getAccessTokenInput();
```

- *Type:* java.lang.String

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobIdInput"></a>

```java
public java.lang.String getJobIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceUrlInput`<sup>Optional</sup> <a name="workspaceUrlInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrlInput"></a>

```java
public java.lang.String getWorkspaceUrlInput();
```

- *Type:* java.lang.String

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `workspaceUrl`<sup>Required</sup> <a name="workspaceUrl" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrl"></a>

```java
public java.lang.String getWorkspaceUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.internalValue"></a>

```java
public MlflowWebhookJobSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

---



