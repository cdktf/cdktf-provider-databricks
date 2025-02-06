# `defaultNamespaceSetting` Submodule <a name="`defaultNamespaceSetting` Submodule" id="@cdktf/provider-databricks.defaultNamespaceSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultNamespaceSetting <a name="DefaultNamespaceSetting" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting databricks_default_namespace_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_setting.DefaultNamespaceSetting;

DefaultNamespaceSetting.Builder.create(Construct scope, java.lang.String id)
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
    .namespace(DefaultNamespaceSettingNamespace)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .settingName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a></code> | namespace block. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#etag DefaultNamespaceSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#id DefaultNamespaceSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.settingName">settingName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#setting_name DefaultNamespaceSetting#setting_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.namespace"></a>

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a>

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#namespace DefaultNamespaceSetting#namespace}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#etag DefaultNamespaceSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#id DefaultNamespaceSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.Initializer.parameter.settingName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#setting_name DefaultNamespaceSetting#setting_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.putNamespace">putNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetSettingName">resetSettingName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNamespace` <a name="putNamespace" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.putNamespace"></a>

```java
public void putNamespace(DefaultNamespaceSettingNamespace value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.putNamespace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a>

---

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetId"></a>

```java
public void resetId()
```

##### `resetSettingName` <a name="resetSettingName" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.resetSettingName"></a>

```java
public void resetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DefaultNamespaceSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_setting.DefaultNamespaceSetting;

DefaultNamespaceSetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_setting.DefaultNamespaceSetting;

DefaultNamespaceSetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_setting.DefaultNamespaceSetting;

DefaultNamespaceSetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_setting.DefaultNamespaceSetting;

DefaultNamespaceSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DefaultNamespaceSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DefaultNamespaceSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DefaultNamespaceSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DefaultNamespaceSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DefaultNamespaceSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference">DefaultNamespaceSettingNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.namespaceInput">namespaceInput</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.settingNameInput">settingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.settingName">settingName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.namespace"></a>

```java
public DefaultNamespaceSettingNamespaceOutputReference getNamespace();
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference">DefaultNamespaceSettingNamespaceOutputReference</a>

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.namespaceInput"></a>

```java
public DefaultNamespaceSettingNamespace getNamespaceInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a>

---

##### `settingNameInput`<sup>Optional</sup> <a name="settingNameInput" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.settingNameInput"></a>

```java
public java.lang.String getSettingNameInput();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `settingName`<sup>Required</sup> <a name="settingName" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.settingName"></a>

```java
public java.lang.String getSettingName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultNamespaceSettingConfig <a name="DefaultNamespaceSettingConfig" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_setting.DefaultNamespaceSettingConfig;

DefaultNamespaceSettingConfig.builder()
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
    .namespace(DefaultNamespaceSettingNamespace)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .settingName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a></code> | namespace block. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#etag DefaultNamespaceSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#id DefaultNamespaceSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.settingName">settingName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#setting_name DefaultNamespaceSetting#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.namespace"></a>

```java
public DefaultNamespaceSettingNamespace getNamespace();
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a>

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#namespace DefaultNamespaceSetting#namespace}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#etag DefaultNamespaceSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#id DefaultNamespaceSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingConfig.property.settingName"></a>

```java
public java.lang.String getSettingName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#setting_name DefaultNamespaceSetting#setting_name}.

---

### DefaultNamespaceSettingNamespace <a name="DefaultNamespaceSettingNamespace" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_setting.DefaultNamespaceSettingNamespace;

DefaultNamespaceSettingNamespace.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#value DefaultNamespaceSetting#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/default_namespace_setting#value DefaultNamespaceSetting#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultNamespaceSettingNamespaceOutputReference <a name="DefaultNamespaceSettingNamespaceOutputReference" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_setting.DefaultNamespaceSettingNamespaceOutputReference;

new DefaultNamespaceSettingNamespaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespaceOutputReference.property.internalValue"></a>

```java
public DefaultNamespaceSettingNamespace getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSetting.DefaultNamespaceSettingNamespace">DefaultNamespaceSettingNamespace</a>

---



