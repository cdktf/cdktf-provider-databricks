# `modelServing` Submodule <a name="`modelServing` Submodule" id="@cdktf/provider-databricks.modelServing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ModelServing <a name="ModelServing" id="@cdktf/provider-databricks.modelServing.ModelServing"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving databricks_model_serving}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServing;

ModelServing.Builder.create(Construct scope, java.lang.String id)
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
    .config(ModelServingConfigA)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .rateLimits(IResolvable)
//  .rateLimits(java.util.List<ModelServingRateLimits>)
//  .tags(IResolvable)
//  .tags(java.util.List<ModelServingTags>)
//  .timeouts(ModelServingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#id ModelServing#id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.rateLimits">rateLimits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#config ModelServing#config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#id ModelServing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.rateLimits"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#rate_limits ModelServing#rate_limits}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#tags ModelServing#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#timeouts ModelServing#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putRateLimits">putRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetRateLimits">resetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServing.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.modelServing.ModelServing.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.modelServing.ModelServing.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.modelServing.ModelServing.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.modelServing.ModelServing.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.modelServing.ModelServing.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.modelServing.ModelServing.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.modelServing.ModelServing.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServing.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.modelServing.ModelServing.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.modelServing.ModelServing.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.modelServing.ModelServing.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServing.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.modelServing.ModelServing.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-databricks.modelServing.ModelServing.putConfig"></a>

```java
public void putConfig(ModelServingConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---

##### `putRateLimits` <a name="putRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServing.putRateLimits"></a>

```java
public void putRateLimits(IResolvable OR java.util.List<ModelServingRateLimits> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putRateLimits.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-databricks.modelServing.ModelServing.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<ModelServingTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts"></a>

```java
public void putTimeouts(ModelServingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.modelServing.ModelServing.resetId"></a>

```java
public void resetId()
```

##### `resetRateLimits` <a name="resetRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServing.resetRateLimits"></a>

```java
public void resetRateLimits()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-databricks.modelServing.ModelServing.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ModelServing resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.modelServing.ModelServing.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServing;

ModelServing.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServing;

ModelServing.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServing;

ModelServing.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServing;

ModelServing.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ModelServing.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ModelServing resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ModelServing to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ModelServing that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ModelServing to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference">ModelServingConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList">ModelServingRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.servingEndpointId">servingEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList">ModelServingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference">ModelServingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimitsInput">rateLimitsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.modelServing.ModelServing.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.modelServing.ModelServing.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServing.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.modelServing.ModelServing.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServing.ModelServing.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServing.ModelServing.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.modelServing.ModelServing.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.modelServing.ModelServing.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServing.ModelServing.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServing.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServing.ModelServing.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServing.ModelServing.property.config"></a>

```java
public ModelServingConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference">ModelServingConfigAOutputReference</a>

---

##### `rateLimits`<sup>Required</sup> <a name="rateLimits" id="@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimits"></a>

```java
public ModelServingRateLimitsList getRateLimits();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList">ModelServingRateLimitsList</a>

---

##### `servingEndpointId`<sup>Required</sup> <a name="servingEndpointId" id="@cdktf/provider-databricks.modelServing.ModelServing.property.servingEndpointId"></a>

```java
public java.lang.String getServingEndpointId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.modelServing.ModelServing.property.tags"></a>

```java
public ModelServingTagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList">ModelServingTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.property.timeouts"></a>

```java
public ModelServingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference">ModelServingTimeoutsOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.configInput"></a>

```java
public ModelServingConfigA getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rateLimitsInput`<sup>Optional</sup> <a name="rateLimitsInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimitsInput"></a>

```java
public java.lang.Object getRateLimitsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServing.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.modelServing.ModelServing.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ModelServingConfig <a name="ModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfig;

ModelServingConfig.builder()
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
    .config(ModelServingConfigA)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .rateLimits(IResolvable)
//  .rateLimits(java.util.List<ModelServingRateLimits>)
//  .tags(IResolvable)
//  .tags(java.util.List<ModelServingTags>)
//  .timeouts(ModelServingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#id ModelServing#id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.rateLimits">rateLimits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.config"></a>

```java
public ModelServingConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#config ModelServing#config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#id ModelServing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.rateLimits"></a>

```java
public java.lang.Object getRateLimits();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#rate_limits ModelServing#rate_limits}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#tags ModelServing#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.timeouts"></a>

```java
public ModelServingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#timeouts ModelServing#timeouts}

---

### ModelServingConfigA <a name="ModelServingConfigA" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigA;

ModelServingConfigA.builder()
//  .autoCaptureConfig(ModelServingConfigAutoCaptureConfig)
//  .servedModels(IResolvable)
//  .servedModels(java.util.List<ModelServingConfigServedModels>)
//  .trafficConfig(ModelServingConfigTrafficConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.autoCaptureConfig">autoCaptureConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a></code> | auto_capture_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedModels">servedModels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>></code> | served_models block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.trafficConfig">trafficConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | traffic_config block. |

---

##### `autoCaptureConfig`<sup>Optional</sup> <a name="autoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.autoCaptureConfig"></a>

```java
public ModelServingConfigAutoCaptureConfig getAutoCaptureConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

auto_capture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#auto_capture_config ModelServing#auto_capture_config}

---

##### `servedModels`<sup>Optional</sup> <a name="servedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedModels"></a>

```java
public java.lang.Object getServedModels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>>

served_models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#served_models ModelServing#served_models}

---

##### `trafficConfig`<sup>Optional</sup> <a name="trafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.trafficConfig"></a>

```java
public ModelServingConfigTrafficConfig getTrafficConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

traffic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#traffic_config ModelServing#traffic_config}

---

### ModelServingConfigAutoCaptureConfig <a name="ModelServingConfigAutoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigAutoCaptureConfig;

ModelServingConfigAutoCaptureConfig.builder()
//  .catalogName(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .schemaName(java.lang.String)
//  .tableNamePrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#enabled ModelServing#enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#schema_name ModelServing#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.tableNamePrefix">tableNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}. |

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#enabled ModelServing#enabled}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#schema_name ModelServing#schema_name}.

---

##### `tableNamePrefix`<sup>Optional</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.tableNamePrefix"></a>

```java
public java.lang.String getTableNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}.

---

### ModelServingConfigServedModels <a name="ModelServingConfigServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedModels;

ModelServingConfigServedModels.builder()
    .modelName(java.lang.String)
    .modelVersion(java.lang.String)
    .workloadSize(java.lang.String)
//  .environmentVars(java.util.Map<java.lang.String, java.lang.String>)
//  .instanceProfileArn(java.lang.String)
//  .name(java.lang.String)
//  .scaleToZeroEnabled(java.lang.Boolean)
//  .scaleToZeroEnabled(IResolvable)
//  .workloadType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelName">modelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#model_name ModelServing#model_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#model_version ModelServing#model_version}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadSize">workloadSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#workload_size ModelServing#workload_size}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.environmentVars">environmentVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.scaleToZeroEnabled">scaleToZeroEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#workload_type ModelServing#workload_type}. |

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#model_name ModelServing#model_name}.

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelVersion"></a>

```java
public java.lang.String getModelVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#model_version ModelServing#model_version}.

---

##### `workloadSize`<sup>Required</sup> <a name="workloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadSize"></a>

```java
public java.lang.String getWorkloadSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#workload_size ModelServing#workload_size}.

---

##### `environmentVars`<sup>Optional</sup> <a name="environmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.environmentVars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `scaleToZeroEnabled`<sup>Optional</sup> <a name="scaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.scaleToZeroEnabled"></a>

```java
public java.lang.Object getScaleToZeroEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}.

---

##### `workloadType`<sup>Optional</sup> <a name="workloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#workload_type ModelServing#workload_type}.

---

### ModelServingConfigTrafficConfig <a name="ModelServingConfigTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigTrafficConfig;

ModelServingConfigTrafficConfig.builder()
//  .routes(IResolvable)
//  .routes(java.util.List<ModelServingConfigTrafficConfigRoutes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.property.routes">routes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>></code> | routes block. |

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.property.routes"></a>

```java
public java.lang.Object getRoutes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>>

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#routes ModelServing#routes}

---

### ModelServingConfigTrafficConfigRoutes <a name="ModelServingConfigTrafficConfigRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigTrafficConfigRoutes;

ModelServingConfigTrafficConfigRoutes.builder()
    .servedModelName(java.lang.String)
    .trafficPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedModelName">servedModelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#served_model_name ModelServing#served_model_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.trafficPercentage">trafficPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#traffic_percentage ModelServing#traffic_percentage}. |

---

##### `servedModelName`<sup>Required</sup> <a name="servedModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedModelName"></a>

```java
public java.lang.String getServedModelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#served_model_name ModelServing#served_model_name}.

---

##### `trafficPercentage`<sup>Required</sup> <a name="trafficPercentage" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.trafficPercentage"></a>

```java
public java.lang.Number getTrafficPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#traffic_percentage ModelServing#traffic_percentage}.

---

### ModelServingRateLimits <a name="ModelServingRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingRateLimits;

ModelServingRateLimits.builder()
    .calls(java.lang.Number)
    .renewalPeriod(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.calls">calls</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#calls ModelServing#calls}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.renewalPeriod">renewalPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#key ModelServing#key}. |

---

##### `calls`<sup>Required</sup> <a name="calls" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.calls"></a>

```java
public java.lang.Number getCalls();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#calls ModelServing#calls}.

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.renewalPeriod"></a>

```java
public java.lang.String getRenewalPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#key ModelServing#key}.

---

### ModelServingTags <a name="ModelServingTags" id="@cdktf/provider-databricks.modelServing.ModelServingTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingTags;

ModelServingTags.builder()
    .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#key ModelServing#key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#value ModelServing#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#key ModelServing#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#value ModelServing#value}.

---

### ModelServingTimeouts <a name="ModelServingTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingTimeouts;

ModelServingTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#create ModelServing#create}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#update ModelServing#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#create ModelServing#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/model_serving#update ModelServing#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ModelServingConfigAOutputReference <a name="ModelServingConfigAOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigAOutputReference;

new ModelServingConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putAutoCaptureConfig">putAutoCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels">putServedModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig">putTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetAutoCaptureConfig">resetAutoCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetServedModels">resetServedModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetTrafficConfig">resetTrafficConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoCaptureConfig` <a name="putAutoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putAutoCaptureConfig"></a>

```java
public void putAutoCaptureConfig(ModelServingConfigAutoCaptureConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putAutoCaptureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

---

##### `putServedModels` <a name="putServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels"></a>

```java
public void putServedModels(IResolvable OR java.util.List<ModelServingConfigServedModels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>>

---

##### `putTrafficConfig` <a name="putTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig"></a>

```java
public void putTrafficConfig(ModelServingConfigTrafficConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---

##### `resetAutoCaptureConfig` <a name="resetAutoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetAutoCaptureConfig"></a>

```java
public void resetAutoCaptureConfig()
```

##### `resetServedModels` <a name="resetServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetServedModels"></a>

```java
public void resetServedModels()
```

##### `resetTrafficConfig` <a name="resetTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetTrafficConfig"></a>

```java
public void resetTrafficConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfig">autoCaptureConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference">ModelServingConfigAutoCaptureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModels">servedModels</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList">ModelServingConfigServedModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfig">trafficConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference">ModelServingConfigTrafficConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfigInput">autoCaptureConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModelsInput">servedModelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfigInput">trafficConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoCaptureConfig`<sup>Required</sup> <a name="autoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfig"></a>

```java
public ModelServingConfigAutoCaptureConfigOutputReference getAutoCaptureConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference">ModelServingConfigAutoCaptureConfigOutputReference</a>

---

##### `servedModels`<sup>Required</sup> <a name="servedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModels"></a>

```java
public ModelServingConfigServedModelsList getServedModels();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList">ModelServingConfigServedModelsList</a>

---

##### `trafficConfig`<sup>Required</sup> <a name="trafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfig"></a>

```java
public ModelServingConfigTrafficConfigOutputReference getTrafficConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference">ModelServingConfigTrafficConfigOutputReference</a>

---

##### `autoCaptureConfigInput`<sup>Optional</sup> <a name="autoCaptureConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfigInput"></a>

```java
public ModelServingConfigAutoCaptureConfig getAutoCaptureConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

---

##### `servedModelsInput`<sup>Optional</sup> <a name="servedModelsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModelsInput"></a>

```java
public java.lang.Object getServedModelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>>

---

##### `trafficConfigInput`<sup>Optional</sup> <a name="trafficConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfigInput"></a>

```java
public ModelServingConfigTrafficConfig getTrafficConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.internalValue"></a>

```java
public ModelServingConfigA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---


### ModelServingConfigAutoCaptureConfigOutputReference <a name="ModelServingConfigAutoCaptureConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigAutoCaptureConfigOutputReference;

new ModelServingConfigAutoCaptureConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetTableNamePrefix">resetTableNamePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```

##### `resetTableNamePrefix` <a name="resetTableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetTableNamePrefix"></a>

```java
public void resetTableNamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefixInput">tableNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefix">tableNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNamePrefixInput`<sup>Optional</sup> <a name="tableNamePrefixInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefixInput"></a>

```java
public java.lang.String getTableNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefix"></a>

```java
public java.lang.String getTableNamePrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.internalValue"></a>

```java
public ModelServingConfigAutoCaptureConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

---


### ModelServingConfigServedModelsList <a name="ModelServingConfigServedModelsList" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedModelsList;

new ModelServingConfigServedModelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get"></a>

```java
public ModelServingConfigServedModelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>>

---


### ModelServingConfigServedModelsOutputReference <a name="ModelServingConfigServedModelsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedModelsOutputReference;

new ModelServingConfigServedModelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetEnvironmentVars">resetEnvironmentVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetScaleToZeroEnabled">resetScaleToZeroEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetWorkloadType">resetWorkloadType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironmentVars` <a name="resetEnvironmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetEnvironmentVars"></a>

```java
public void resetEnvironmentVars()
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetInstanceProfileArn"></a>

```java
public void resetInstanceProfileArn()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetScaleToZeroEnabled` <a name="resetScaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetScaleToZeroEnabled"></a>

```java
public void resetScaleToZeroEnabled()
```

##### `resetWorkloadType` <a name="resetWorkloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetWorkloadType"></a>

```java
public void resetWorkloadType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVarsInput">environmentVarsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelNameInput">modelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersionInput">modelVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabledInput">scaleToZeroEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSizeInput">workloadSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadTypeInput">workloadTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVars">environmentVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelName">modelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabled">scaleToZeroEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSize">workloadSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `environmentVarsInput`<sup>Optional</sup> <a name="environmentVarsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVarsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVarsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArnInput"></a>

```java
public java.lang.String getInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelNameInput"></a>

```java
public java.lang.String getModelNameInput();
```

- *Type:* java.lang.String

---

##### `modelVersionInput`<sup>Optional</sup> <a name="modelVersionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersionInput"></a>

```java
public java.lang.String getModelVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scaleToZeroEnabledInput`<sup>Optional</sup> <a name="scaleToZeroEnabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabledInput"></a>

```java
public java.lang.Object getScaleToZeroEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `workloadSizeInput`<sup>Optional</sup> <a name="workloadSizeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSizeInput"></a>

```java
public java.lang.String getWorkloadSizeInput();
```

- *Type:* java.lang.String

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadTypeInput"></a>

```java
public java.lang.String getWorkloadTypeInput();
```

- *Type:* java.lang.String

---

##### `environmentVars`<sup>Required</sup> <a name="environmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersion"></a>

```java
public java.lang.String getModelVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scaleToZeroEnabled`<sup>Required</sup> <a name="scaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabled"></a>

```java
public java.lang.Object getScaleToZeroEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `workloadSize`<sup>Required</sup> <a name="workloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSize"></a>

```java
public java.lang.String getWorkloadSize();
```

- *Type:* java.lang.String

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>

---


### ModelServingConfigTrafficConfigOutputReference <a name="ModelServingConfigTrafficConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigTrafficConfigOutputReference;

new ModelServingConfigTrafficConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes">putRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resetRoutes">resetRoutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRoutes` <a name="putRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes"></a>

```java
public void putRoutes(IResolvable OR java.util.List<ModelServingConfigTrafficConfigRoutes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>>

---

##### `resetRoutes` <a name="resetRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resetRoutes"></a>

```java
public void resetRoutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList">ModelServingConfigTrafficConfigRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routesInput">routesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routes"></a>

```java
public ModelServingConfigTrafficConfigRoutesList getRoutes();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList">ModelServingConfigTrafficConfigRoutesList</a>

---

##### `routesInput`<sup>Optional</sup> <a name="routesInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routesInput"></a>

```java
public java.lang.Object getRoutesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.internalValue"></a>

```java
public ModelServingConfigTrafficConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---


### ModelServingConfigTrafficConfigRoutesList <a name="ModelServingConfigTrafficConfigRoutesList" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigTrafficConfigRoutesList;

new ModelServingConfigTrafficConfigRoutesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get"></a>

```java
public ModelServingConfigTrafficConfigRoutesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>>

---


### ModelServingConfigTrafficConfigRoutesOutputReference <a name="ModelServingConfigTrafficConfigRoutesOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigTrafficConfigRoutesOutputReference;

new ModelServingConfigTrafficConfigRoutesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput">servedModelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput">trafficPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelName">servedModelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentage">trafficPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `servedModelNameInput`<sup>Optional</sup> <a name="servedModelNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput"></a>

```java
public java.lang.String getServedModelNameInput();
```

- *Type:* java.lang.String

---

##### `trafficPercentageInput`<sup>Optional</sup> <a name="trafficPercentageInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput"></a>

```java
public java.lang.Number getTrafficPercentageInput();
```

- *Type:* java.lang.Number

---

##### `servedModelName`<sup>Required</sup> <a name="servedModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelName"></a>

```java
public java.lang.String getServedModelName();
```

- *Type:* java.lang.String

---

##### `trafficPercentage`<sup>Required</sup> <a name="trafficPercentage" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentage"></a>

```java
public java.lang.Number getTrafficPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>

---


### ModelServingRateLimitsList <a name="ModelServingRateLimitsList" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingRateLimitsList;

new ModelServingRateLimitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.get"></a>

```java
public ModelServingRateLimitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>>

---


### ModelServingRateLimitsOutputReference <a name="ModelServingRateLimitsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingRateLimitsOutputReference;

new ModelServingRateLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.callsInput">callsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriodInput">renewalPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.calls">calls</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriod">renewalPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `callsInput`<sup>Optional</sup> <a name="callsInput" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.callsInput"></a>

```java
public java.lang.Number getCallsInput();
```

- *Type:* java.lang.Number

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `renewalPeriodInput`<sup>Optional</sup> <a name="renewalPeriodInput" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriodInput"></a>

```java
public java.lang.String getRenewalPeriodInput();
```

- *Type:* java.lang.String

---

##### `calls`<sup>Required</sup> <a name="calls" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.calls"></a>

```java
public java.lang.Number getCalls();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriod"></a>

```java
public java.lang.String getRenewalPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>

---


### ModelServingTagsList <a name="ModelServingTagsList" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingTagsList;

new ModelServingTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.get"></a>

```java
public ModelServingTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>>

---


### ModelServingTagsOutputReference <a name="ModelServingTagsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingTagsOutputReference;

new ModelServingTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>

---


### ModelServingTimeoutsOutputReference <a name="ModelServingTimeoutsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingTimeoutsOutputReference;

new ModelServingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

---



