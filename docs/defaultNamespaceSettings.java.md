# `defaultNamespaceSettings` Submodule <a name="`defaultNamespaceSettings` Submodule" id="@cdktf/provider-databricks.defaultNamespaceSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultNamespaceSettings <a name="DefaultNamespaceSettings" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings databricks_default_namespace_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_settings.DefaultNamespaceSettings;

DefaultNamespaceSettings.Builder.create(Construct scope, java.lang.String id)
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
    .namespace(DefaultNamespaceSettingsNamespace)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .settingName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a></code> | namespace block. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#etag DefaultNamespaceSettings#etag}. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#id DefaultNamespaceSettings#id}. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.settingName">settingName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#setting_name DefaultNamespaceSettings#setting_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.namespace"></a>

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a>

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#namespace DefaultNamespaceSettings#namespace}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#etag DefaultNamespaceSettings#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#id DefaultNamespaceSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.settingName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#setting_name DefaultNamespaceSettings#setting_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.putNamespace">putNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetSettingName">resetSettingName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putNamespace` <a name="putNamespace" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.putNamespace"></a>

```java
public void putNamespace(DefaultNamespaceSettingsNamespace value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.putNamespace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a>

---

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetId"></a>

```java
public void resetId()
```

##### `resetSettingName` <a name="resetSettingName" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetSettingName"></a>

```java
public void resetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DefaultNamespaceSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_settings.DefaultNamespaceSettings;

DefaultNamespaceSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_settings.DefaultNamespaceSettings;

DefaultNamespaceSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_settings.DefaultNamespaceSettings;

DefaultNamespaceSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_settings.DefaultNamespaceSettings;

DefaultNamespaceSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DefaultNamespaceSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DefaultNamespaceSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DefaultNamespaceSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DefaultNamespaceSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DefaultNamespaceSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference">DefaultNamespaceSettingsNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.namespaceInput">namespaceInput</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.settingNameInput">settingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.settingName">settingName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.namespace"></a>

```java
public DefaultNamespaceSettingsNamespaceOutputReference getNamespace();
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference">DefaultNamespaceSettingsNamespaceOutputReference</a>

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.namespaceInput"></a>

```java
public DefaultNamespaceSettingsNamespace getNamespaceInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a>

---

##### `settingNameInput`<sup>Optional</sup> <a name="settingNameInput" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.settingNameInput"></a>

```java
public java.lang.String getSettingNameInput();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `settingName`<sup>Required</sup> <a name="settingName" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.settingName"></a>

```java
public java.lang.String getSettingName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultNamespaceSettingsConfig <a name="DefaultNamespaceSettingsConfig" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_settings.DefaultNamespaceSettingsConfig;

DefaultNamespaceSettingsConfig.builder()
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
    .namespace(DefaultNamespaceSettingsNamespace)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .settingName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a></code> | namespace block. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#etag DefaultNamespaceSettings#etag}. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#id DefaultNamespaceSettings#id}. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.settingName">settingName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#setting_name DefaultNamespaceSettings#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.namespace"></a>

```java
public DefaultNamespaceSettingsNamespace getNamespace();
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a>

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#namespace DefaultNamespaceSettings#namespace}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#etag DefaultNamespaceSettings#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#id DefaultNamespaceSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.settingName"></a>

```java
public java.lang.String getSettingName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#setting_name DefaultNamespaceSettings#setting_name}.

---

### DefaultNamespaceSettingsNamespace <a name="DefaultNamespaceSettingsNamespace" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_settings.DefaultNamespaceSettingsNamespace;

DefaultNamespaceSettingsNamespace.builder()
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#value DefaultNamespaceSettings#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#value DefaultNamespaceSettings#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultNamespaceSettingsNamespaceOutputReference <a name="DefaultNamespaceSettingsNamespaceOutputReference" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.default_namespace_settings.DefaultNamespaceSettingsNamespaceOutputReference;

new DefaultNamespaceSettingsNamespaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.internalValue"></a>

```java
public DefaultNamespaceSettingsNamespace getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a>

---



