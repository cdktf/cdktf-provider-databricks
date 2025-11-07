# `onlineTable` Submodule <a name="`onlineTable` Submodule" id="@cdktf/provider-databricks.onlineTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnlineTable <a name="OnlineTable" id="@cdktf/provider-databricks.onlineTable.OnlineTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table databricks_online_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTable;

OnlineTable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .spec(OnlineTableSpec)
//  .timeouts(OnlineTableTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#name OnlineTable#name}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#id OnlineTable#id}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#name OnlineTable#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#id OnlineTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#spec OnlineTable#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#timeouts OnlineTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.onlineTable.OnlineTable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec"></a>

```java
public void putSpec(OnlineTableSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putTimeouts"></a>

```java
public void putTimeouts(OnlineTableTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetId"></a>

```java
public void resetId()
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetSpec"></a>

```java
public void resetSpec()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OnlineTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTable;

OnlineTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTable;

OnlineTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTable;

OnlineTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTable;

OnlineTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OnlineTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OnlineTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OnlineTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OnlineTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OnlineTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference">OnlineTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.status">status</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList">OnlineTableStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.tableServingUrl">tableServingUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference">OnlineTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.unityCatalogProvisioningState">unityCatalogProvisioningState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.spec"></a>

```java
public OnlineTableSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference">OnlineTableSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.status"></a>

```java
public OnlineTableStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList">OnlineTableStatusList</a>

---

##### `tableServingUrl`<sup>Required</sup> <a name="tableServingUrl" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.tableServingUrl"></a>

```java
public java.lang.String getTableServingUrl();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeouts"></a>

```java
public OnlineTableTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference">OnlineTableTimeoutsOutputReference</a>

---

##### `unityCatalogProvisioningState`<sup>Required</sup> <a name="unityCatalogProvisioningState" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.unityCatalogProvisioningState"></a>

```java
public java.lang.String getUnityCatalogProvisioningState();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.specInput"></a>

```java
public OnlineTableSpec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeoutsInput"></a>

```java
public IResolvable|OnlineTableTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OnlineTableConfig <a name="OnlineTableConfig" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableConfig;

OnlineTableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .spec(OnlineTableSpec)
//  .timeouts(OnlineTableTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#name OnlineTable#name}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#id OnlineTable#id}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#name OnlineTable#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#id OnlineTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.spec"></a>

```java
public OnlineTableSpec getSpec();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#spec OnlineTable#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.timeouts"></a>

```java
public OnlineTableTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#timeouts OnlineTable#timeouts}

---

### OnlineTableSpec <a name="OnlineTableSpec" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableSpec;

OnlineTableSpec.builder()
//  .performFullCopy(java.lang.Boolean|IResolvable)
//  .primaryKeyColumns(java.util.List<java.lang.String>)
//  .runContinuously(OnlineTableSpecRunContinuously)
//  .runTriggered(OnlineTableSpecRunTriggered)
//  .sourceTableFullName(java.lang.String)
//  .timeseriesKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.performFullCopy">performFullCopy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#perform_full_copy OnlineTable#perform_full_copy}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.primaryKeyColumns">primaryKeyColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#primary_key_columns OnlineTable#primary_key_columns}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runContinuously">runContinuously</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a></code> | run_continuously block. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runTriggered">runTriggered</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a></code> | run_triggered block. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.sourceTableFullName">sourceTableFullName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#source_table_full_name OnlineTable#source_table_full_name}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.timeseriesKey">timeseriesKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#timeseries_key OnlineTable#timeseries_key}. |

---

##### `performFullCopy`<sup>Optional</sup> <a name="performFullCopy" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.performFullCopy"></a>

```java
public java.lang.Boolean|IResolvable getPerformFullCopy();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#perform_full_copy OnlineTable#perform_full_copy}.

---

##### `primaryKeyColumns`<sup>Optional</sup> <a name="primaryKeyColumns" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.primaryKeyColumns"></a>

```java
public java.util.List<java.lang.String> getPrimaryKeyColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#primary_key_columns OnlineTable#primary_key_columns}.

---

##### `runContinuously`<sup>Optional</sup> <a name="runContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runContinuously"></a>

```java
public OnlineTableSpecRunContinuously getRunContinuously();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

run_continuously block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#run_continuously OnlineTable#run_continuously}

---

##### `runTriggered`<sup>Optional</sup> <a name="runTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runTriggered"></a>

```java
public OnlineTableSpecRunTriggered getRunTriggered();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

run_triggered block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#run_triggered OnlineTable#run_triggered}

---

##### `sourceTableFullName`<sup>Optional</sup> <a name="sourceTableFullName" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.sourceTableFullName"></a>

```java
public java.lang.String getSourceTableFullName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#source_table_full_name OnlineTable#source_table_full_name}.

---

##### `timeseriesKey`<sup>Optional</sup> <a name="timeseriesKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.timeseriesKey"></a>

```java
public java.lang.String getTimeseriesKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#timeseries_key OnlineTable#timeseries_key}.

---

### OnlineTableSpecRunContinuously <a name="OnlineTableSpecRunContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableSpecRunContinuously;

OnlineTableSpecRunContinuously.builder()
    .build();
```


### OnlineTableSpecRunTriggered <a name="OnlineTableSpecRunTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableSpecRunTriggered;

OnlineTableSpecRunTriggered.builder()
    .build();
```


### OnlineTableStatus <a name="OnlineTableStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatus;

OnlineTableStatus.builder()
    .build();
```


### OnlineTableStatusContinuousUpdateStatus <a name="OnlineTableStatusContinuousUpdateStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusContinuousUpdateStatus;

OnlineTableStatusContinuousUpdateStatus.builder()
    .build();
```


### OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress <a name="OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress;

OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress.builder()
    .build();
```


### OnlineTableStatusFailedStatus <a name="OnlineTableStatusFailedStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusFailedStatus;

OnlineTableStatusFailedStatus.builder()
    .build();
```


### OnlineTableStatusProvisioningStatus <a name="OnlineTableStatusProvisioningStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusProvisioningStatus;

OnlineTableStatusProvisioningStatus.builder()
    .build();
```


### OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress <a name="OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress;

OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress.builder()
    .build();
```


### OnlineTableStatusTriggeredUpdateStatus <a name="OnlineTableStatusTriggeredUpdateStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusTriggeredUpdateStatus;

OnlineTableStatusTriggeredUpdateStatus.builder()
    .build();
```


### OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress <a name="OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress;

OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress.builder()
    .build();
```


### OnlineTableTimeouts <a name="OnlineTableTimeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableTimeouts;

OnlineTableTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#create OnlineTable#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/online_table#create OnlineTable#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### OnlineTableSpecOutputReference <a name="OnlineTableSpecOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableSpecOutputReference;

new OnlineTableSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunContinuously">putRunContinuously</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunTriggered">putRunTriggered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPerformFullCopy">resetPerformFullCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPrimaryKeyColumns">resetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunContinuously">resetRunContinuously</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunTriggered">resetRunTriggered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetSourceTableFullName">resetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetTimeseriesKey">resetTimeseriesKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRunContinuously` <a name="putRunContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunContinuously"></a>

```java
public void putRunContinuously(OnlineTableSpecRunContinuously value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunContinuously.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

---

##### `putRunTriggered` <a name="putRunTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunTriggered"></a>

```java
public void putRunTriggered(OnlineTableSpecRunTriggered value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunTriggered.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

---

##### `resetPerformFullCopy` <a name="resetPerformFullCopy" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPerformFullCopy"></a>

```java
public void resetPerformFullCopy()
```

##### `resetPrimaryKeyColumns` <a name="resetPrimaryKeyColumns" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```java
public void resetPrimaryKeyColumns()
```

##### `resetRunContinuously` <a name="resetRunContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunContinuously"></a>

```java
public void resetRunContinuously()
```

##### `resetRunTriggered` <a name="resetRunTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunTriggered"></a>

```java
public void resetRunTriggered()
```

##### `resetSourceTableFullName` <a name="resetSourceTableFullName" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetSourceTableFullName"></a>

```java
public void resetSourceTableFullName()
```

##### `resetTimeseriesKey` <a name="resetTimeseriesKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetTimeseriesKey"></a>

```java
public void resetTimeseriesKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.pipelineId">pipelineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuously">runContinuously</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference">OnlineTableSpecRunContinuouslyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggered">runTriggered</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference">OnlineTableSpecRunTriggeredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopyInput">performFullCopyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumnsInput">primaryKeyColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuouslyInput">runContinuouslyInput</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggeredInput">runTriggeredInput</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullNameInput">sourceTableFullNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKeyInput">timeseriesKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopy">performFullCopy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumns">primaryKeyColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullName">sourceTableFullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKey">timeseriesKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.pipelineId"></a>

```java
public java.lang.String getPipelineId();
```

- *Type:* java.lang.String

---

##### `runContinuously`<sup>Required</sup> <a name="runContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuously"></a>

```java
public OnlineTableSpecRunContinuouslyOutputReference getRunContinuously();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference">OnlineTableSpecRunContinuouslyOutputReference</a>

---

##### `runTriggered`<sup>Required</sup> <a name="runTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggered"></a>

```java
public OnlineTableSpecRunTriggeredOutputReference getRunTriggered();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference">OnlineTableSpecRunTriggeredOutputReference</a>

---

##### `performFullCopyInput`<sup>Optional</sup> <a name="performFullCopyInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopyInput"></a>

```java
public java.lang.Boolean|IResolvable getPerformFullCopyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `primaryKeyColumnsInput`<sup>Optional</sup> <a name="primaryKeyColumnsInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```java
public java.util.List<java.lang.String> getPrimaryKeyColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `runContinuouslyInput`<sup>Optional</sup> <a name="runContinuouslyInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuouslyInput"></a>

```java
public OnlineTableSpecRunContinuously getRunContinuouslyInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

---

##### `runTriggeredInput`<sup>Optional</sup> <a name="runTriggeredInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggeredInput"></a>

```java
public OnlineTableSpecRunTriggered getRunTriggeredInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

---

##### `sourceTableFullNameInput`<sup>Optional</sup> <a name="sourceTableFullNameInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```java
public java.lang.String getSourceTableFullNameInput();
```

- *Type:* java.lang.String

---

##### `timeseriesKeyInput`<sup>Optional</sup> <a name="timeseriesKeyInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKeyInput"></a>

```java
public java.lang.String getTimeseriesKeyInput();
```

- *Type:* java.lang.String

---

##### `performFullCopy`<sup>Required</sup> <a name="performFullCopy" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopy"></a>

```java
public java.lang.Boolean|IResolvable getPerformFullCopy();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `primaryKeyColumns`<sup>Required</sup> <a name="primaryKeyColumns" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumns"></a>

```java
public java.util.List<java.lang.String> getPrimaryKeyColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceTableFullName`<sup>Required</sup> <a name="sourceTableFullName" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullName"></a>

```java
public java.lang.String getSourceTableFullName();
```

- *Type:* java.lang.String

---

##### `timeseriesKey`<sup>Required</sup> <a name="timeseriesKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKey"></a>

```java
public java.lang.String getTimeseriesKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.internalValue"></a>

```java
public OnlineTableSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

---


### OnlineTableSpecRunContinuouslyOutputReference <a name="OnlineTableSpecRunContinuouslyOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableSpecRunContinuouslyOutputReference;

new OnlineTableSpecRunContinuouslyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.internalValue"></a>

```java
public OnlineTableSpecRunContinuously getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

---


### OnlineTableSpecRunTriggeredOutputReference <a name="OnlineTableSpecRunTriggeredOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableSpecRunTriggeredOutputReference;

new OnlineTableSpecRunTriggeredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.internalValue"></a>

```java
public OnlineTableSpecRunTriggered getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

---


### OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList <a name="OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList;

new OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.get"></a>

```java
public OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference <a name="OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference;

new OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimatedCompletionTimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latestVersionCurrentlyProcessing</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">syncedRowCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">syncProgressCompletion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">totalRowCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `estimatedCompletionTimeSeconds`<sup>Required</sup> <a name="estimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```java
public java.lang.Number getEstimatedCompletionTimeSeconds();
```

- *Type:* java.lang.Number

---

##### `latestVersionCurrentlyProcessing`<sup>Required</sup> <a name="latestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```java
public java.lang.Number getLatestVersionCurrentlyProcessing();
```

- *Type:* java.lang.Number

---

##### `syncedRowCount`<sup>Required</sup> <a name="syncedRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```java
public java.lang.Number getSyncedRowCount();
```

- *Type:* java.lang.Number

---

##### `syncProgressCompletion`<sup>Required</sup> <a name="syncProgressCompletion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```java
public java.lang.Number getSyncProgressCompletion();
```

- *Type:* java.lang.Number

---

##### `totalRowCount`<sup>Required</sup> <a name="totalRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```java
public java.lang.Number getTotalRowCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```java
public OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress</a>

---


### OnlineTableStatusContinuousUpdateStatusList <a name="OnlineTableStatusContinuousUpdateStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusContinuousUpdateStatusList;

new OnlineTableStatusContinuousUpdateStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.get"></a>

```java
public OnlineTableStatusContinuousUpdateStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OnlineTableStatusContinuousUpdateStatusOutputReference <a name="OnlineTableStatusContinuousUpdateStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusContinuousUpdateStatusOutputReference;

new OnlineTableStatusContinuousUpdateStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress">initialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion">lastProcessedCommitVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus">OnlineTableStatusContinuousUpdateStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `initialPipelineSyncProgress`<sup>Required</sup> <a name="initialPipelineSyncProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress"></a>

```java
public OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList getInitialPipelineSyncProgress();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList</a>

---

##### `lastProcessedCommitVersion`<sup>Required</sup> <a name="lastProcessedCommitVersion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```java
public java.lang.Number getLastProcessedCommitVersion();
```

- *Type:* java.lang.Number

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.internalValue"></a>

```java
public OnlineTableStatusContinuousUpdateStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus">OnlineTableStatusContinuousUpdateStatus</a>

---


### OnlineTableStatusFailedStatusList <a name="OnlineTableStatusFailedStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusFailedStatusList;

new OnlineTableStatusFailedStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.get"></a>

```java
public OnlineTableStatusFailedStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OnlineTableStatusFailedStatusOutputReference <a name="OnlineTableStatusFailedStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusFailedStatusOutputReference;

new OnlineTableStatusFailedStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.lastProcessedCommitVersion">lastProcessedCommitVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus">OnlineTableStatusFailedStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastProcessedCommitVersion`<sup>Required</sup> <a name="lastProcessedCommitVersion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.lastProcessedCommitVersion"></a>

```java
public java.lang.Number getLastProcessedCommitVersion();
```

- *Type:* java.lang.Number

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.internalValue"></a>

```java
public OnlineTableStatusFailedStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus">OnlineTableStatusFailedStatus</a>

---


### OnlineTableStatusList <a name="OnlineTableStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusList;

new OnlineTableStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.get"></a>

```java
public OnlineTableStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OnlineTableStatusOutputReference <a name="OnlineTableStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusOutputReference;

new OnlineTableStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.continuousUpdateStatus">continuousUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList">OnlineTableStatusContinuousUpdateStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.detailedState">detailedState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.failedStatus">failedStatus</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList">OnlineTableStatusFailedStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.provisioningStatus">provisioningStatus</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList">OnlineTableStatusProvisioningStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.triggeredUpdateStatus">triggeredUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList">OnlineTableStatusTriggeredUpdateStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatus">OnlineTableStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `continuousUpdateStatus`<sup>Required</sup> <a name="continuousUpdateStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.continuousUpdateStatus"></a>

```java
public OnlineTableStatusContinuousUpdateStatusList getContinuousUpdateStatus();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList">OnlineTableStatusContinuousUpdateStatusList</a>

---

##### `detailedState`<sup>Required</sup> <a name="detailedState" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.detailedState"></a>

```java
public java.lang.String getDetailedState();
```

- *Type:* java.lang.String

---

##### `failedStatus`<sup>Required</sup> <a name="failedStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.failedStatus"></a>

```java
public OnlineTableStatusFailedStatusList getFailedStatus();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList">OnlineTableStatusFailedStatusList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `provisioningStatus`<sup>Required</sup> <a name="provisioningStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.provisioningStatus"></a>

```java
public OnlineTableStatusProvisioningStatusList getProvisioningStatus();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList">OnlineTableStatusProvisioningStatusList</a>

---

##### `triggeredUpdateStatus`<sup>Required</sup> <a name="triggeredUpdateStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.triggeredUpdateStatus"></a>

```java
public OnlineTableStatusTriggeredUpdateStatusList getTriggeredUpdateStatus();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList">OnlineTableStatusTriggeredUpdateStatusList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.internalValue"></a>

```java
public OnlineTableStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatus">OnlineTableStatus</a>

---


### OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList <a name="OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList;

new OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.get"></a>

```java
public OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference <a name="OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference;

new OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimatedCompletionTimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latestVersionCurrentlyProcessing</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">syncedRowCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">syncProgressCompletion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">totalRowCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `estimatedCompletionTimeSeconds`<sup>Required</sup> <a name="estimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```java
public java.lang.Number getEstimatedCompletionTimeSeconds();
```

- *Type:* java.lang.Number

---

##### `latestVersionCurrentlyProcessing`<sup>Required</sup> <a name="latestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```java
public java.lang.Number getLatestVersionCurrentlyProcessing();
```

- *Type:* java.lang.Number

---

##### `syncedRowCount`<sup>Required</sup> <a name="syncedRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```java
public java.lang.Number getSyncedRowCount();
```

- *Type:* java.lang.Number

---

##### `syncProgressCompletion`<sup>Required</sup> <a name="syncProgressCompletion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```java
public java.lang.Number getSyncProgressCompletion();
```

- *Type:* java.lang.Number

---

##### `totalRowCount`<sup>Required</sup> <a name="totalRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```java
public java.lang.Number getTotalRowCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```java
public OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress</a>

---


### OnlineTableStatusProvisioningStatusList <a name="OnlineTableStatusProvisioningStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusProvisioningStatusList;

new OnlineTableStatusProvisioningStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.get"></a>

```java
public OnlineTableStatusProvisioningStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OnlineTableStatusProvisioningStatusOutputReference <a name="OnlineTableStatusProvisioningStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusProvisioningStatusOutputReference;

new OnlineTableStatusProvisioningStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress">initialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus">OnlineTableStatusProvisioningStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `initialPipelineSyncProgress`<sup>Required</sup> <a name="initialPipelineSyncProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress"></a>

```java
public OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList getInitialPipelineSyncProgress();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.internalValue"></a>

```java
public OnlineTableStatusProvisioningStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus">OnlineTableStatusProvisioningStatus</a>

---


### OnlineTableStatusTriggeredUpdateStatusList <a name="OnlineTableStatusTriggeredUpdateStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusTriggeredUpdateStatusList;

new OnlineTableStatusTriggeredUpdateStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.get"></a>

```java
public OnlineTableStatusTriggeredUpdateStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OnlineTableStatusTriggeredUpdateStatusOutputReference <a name="OnlineTableStatusTriggeredUpdateStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusTriggeredUpdateStatusOutputReference;

new OnlineTableStatusTriggeredUpdateStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion">lastProcessedCommitVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress">triggeredUpdateProgress</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus">OnlineTableStatusTriggeredUpdateStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastProcessedCommitVersion`<sup>Required</sup> <a name="lastProcessedCommitVersion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```java
public java.lang.Number getLastProcessedCommitVersion();
```

- *Type:* java.lang.Number

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `triggeredUpdateProgress`<sup>Required</sup> <a name="triggeredUpdateProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress"></a>

```java
public OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList getTriggeredUpdateProgress();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.internalValue"></a>

```java
public OnlineTableStatusTriggeredUpdateStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus">OnlineTableStatusTriggeredUpdateStatus</a>

---


### OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList <a name="OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList;

new OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.get"></a>

```java
public OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference <a name="OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference;

new OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds">estimatedCompletionTimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing">latestVersionCurrentlyProcessing</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount">syncedRowCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion">syncProgressCompletion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount">totalRowCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `estimatedCompletionTimeSeconds`<sup>Required</sup> <a name="estimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```java
public java.lang.Number getEstimatedCompletionTimeSeconds();
```

- *Type:* java.lang.Number

---

##### `latestVersionCurrentlyProcessing`<sup>Required</sup> <a name="latestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```java
public java.lang.Number getLatestVersionCurrentlyProcessing();
```

- *Type:* java.lang.Number

---

##### `syncedRowCount`<sup>Required</sup> <a name="syncedRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount"></a>

```java
public java.lang.Number getSyncedRowCount();
```

- *Type:* java.lang.Number

---

##### `syncProgressCompletion`<sup>Required</sup> <a name="syncProgressCompletion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion"></a>

```java
public java.lang.Number getSyncProgressCompletion();
```

- *Type:* java.lang.Number

---

##### `totalRowCount`<sup>Required</sup> <a name="totalRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount"></a>

```java
public java.lang.Number getTotalRowCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue"></a>

```java
public OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress</a>

---


### OnlineTableTimeoutsOutputReference <a name="OnlineTableTimeoutsOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.online_table.OnlineTableTimeoutsOutputReference;

new OnlineTableTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OnlineTableTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>

---



