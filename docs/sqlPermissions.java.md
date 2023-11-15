# `databricks_sql_permissions`

Refer to the Terraform Registory for docs: [`databricks_sql_permissions`](https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions).

# `sqlPermissions` Submodule <a name="`sqlPermissions` Submodule" id="@cdktf/provider-databricks.sqlPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlPermissions <a name="SqlPermissions" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions databricks_sql_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_permissions.SqlPermissions;

SqlPermissions.Builder.create(Construct scope, java.lang.String id)
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
//  .anonymousFunction(java.lang.Boolean)
//  .anonymousFunction(IResolvable)
//  .anyFile(java.lang.Boolean)
//  .anyFile(IResolvable)
//  .catalog(java.lang.Boolean)
//  .catalog(IResolvable)
//  .clusterId(java.lang.String)
//  .database(java.lang.String)
//  .id(java.lang.String)
//  .privilegeAssignments(IResolvable)
//  .privilegeAssignments(java.util.List<SqlPermissionsPrivilegeAssignments>)
//  .table(java.lang.String)
//  .view(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.anonymousFunction">anonymousFunction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#anonymous_function SqlPermissions#anonymous_function}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.anyFile">anyFile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#any_file SqlPermissions#any_file}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.catalog">catalog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#catalog SqlPermissions#catalog}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#cluster_id SqlPermissions#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#database SqlPermissions#database}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#id SqlPermissions#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.privilegeAssignments">privilegeAssignments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>></code> | privilege_assignments block. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.table">table</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#table SqlPermissions#table}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.view">view</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#view SqlPermissions#view}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `anonymousFunction`<sup>Optional</sup> <a name="anonymousFunction" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.anonymousFunction"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#anonymous_function SqlPermissions#anonymous_function}.

---

##### `anyFile`<sup>Optional</sup> <a name="anyFile" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.anyFile"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#any_file SqlPermissions#any_file}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.catalog"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#catalog SqlPermissions#catalog}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#cluster_id SqlPermissions#cluster_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.database"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#database SqlPermissions#database}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#id SqlPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilegeAssignments`<sup>Optional</sup> <a name="privilegeAssignments" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.privilegeAssignments"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>>

privilege_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#privilege_assignments SqlPermissions#privilege_assignments}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.table"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#table SqlPermissions#table}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.view"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#view SqlPermissions#view}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.putPrivilegeAssignments">putPrivilegeAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetAnonymousFunction">resetAnonymousFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetAnyFile">resetAnyFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetPrivilegeAssignments">resetPrivilegeAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetView">resetView</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putPrivilegeAssignments` <a name="putPrivilegeAssignments" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.putPrivilegeAssignments"></a>

```java
public void putPrivilegeAssignments(IResolvable OR java.util.List<SqlPermissionsPrivilegeAssignments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.putPrivilegeAssignments.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>>

---

##### `resetAnonymousFunction` <a name="resetAnonymousFunction" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetAnonymousFunction"></a>

```java
public void resetAnonymousFunction()
```

##### `resetAnyFile` <a name="resetAnyFile" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetAnyFile"></a>

```java
public void resetAnyFile()
```

##### `resetCatalog` <a name="resetCatalog" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetClusterId"></a>

```java
public void resetClusterId()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetId"></a>

```java
public void resetId()
```

##### `resetPrivilegeAssignments` <a name="resetPrivilegeAssignments" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetPrivilegeAssignments"></a>

```java
public void resetPrivilegeAssignments()
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetTable"></a>

```java
public void resetTable()
```

##### `resetView` <a name="resetView" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.resetView"></a>

```java
public void resetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlPermissions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_permissions.SqlPermissions;

SqlPermissions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_permissions.SqlPermissions;

SqlPermissions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_permissions.SqlPermissions;

SqlPermissions.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_permissions.SqlPermissions;

SqlPermissions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SqlPermissions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SqlPermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SqlPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SqlPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SqlPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.privilegeAssignments">privilegeAssignments</a></code> | <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList">SqlPermissionsPrivilegeAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anonymousFunctionInput">anonymousFunctionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anyFileInput">anyFileInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.catalogInput">catalogInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.privilegeAssignmentsInput">privilegeAssignmentsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.tableInput">tableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.viewInput">viewInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anonymousFunction">anonymousFunction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anyFile">anyFile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.catalog">catalog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.table">table</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.view">view</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `privilegeAssignments`<sup>Required</sup> <a name="privilegeAssignments" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.privilegeAssignments"></a>

```java
public SqlPermissionsPrivilegeAssignmentsList getPrivilegeAssignments();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList">SqlPermissionsPrivilegeAssignmentsList</a>

---

##### `anonymousFunctionInput`<sup>Optional</sup> <a name="anonymousFunctionInput" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anonymousFunctionInput"></a>

```java
public java.lang.Object getAnonymousFunctionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `anyFileInput`<sup>Optional</sup> <a name="anyFileInput" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anyFileInput"></a>

```java
public java.lang.Object getAnyFileInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.catalogInput"></a>

```java
public java.lang.Object getCatalogInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `privilegeAssignmentsInput`<sup>Optional</sup> <a name="privilegeAssignmentsInput" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.privilegeAssignmentsInput"></a>

```java
public java.lang.Object getPrivilegeAssignmentsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>>

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.tableInput"></a>

```java
public java.lang.String getTableInput();
```

- *Type:* java.lang.String

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.viewInput"></a>

```java
public java.lang.String getViewInput();
```

- *Type:* java.lang.String

---

##### `anonymousFunction`<sup>Required</sup> <a name="anonymousFunction" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anonymousFunction"></a>

```java
public java.lang.Object getAnonymousFunction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `anyFile`<sup>Required</sup> <a name="anyFile" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.anyFile"></a>

```java
public java.lang.Object getAnyFile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.catalog"></a>

```java
public java.lang.Object getCatalog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.view"></a>

```java
public java.lang.String getView();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SqlPermissionsConfig <a name="SqlPermissionsConfig" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_permissions.SqlPermissionsConfig;

SqlPermissionsConfig.builder()
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
//  .anonymousFunction(java.lang.Boolean)
//  .anonymousFunction(IResolvable)
//  .anyFile(java.lang.Boolean)
//  .anyFile(IResolvable)
//  .catalog(java.lang.Boolean)
//  .catalog(IResolvable)
//  .clusterId(java.lang.String)
//  .database(java.lang.String)
//  .id(java.lang.String)
//  .privilegeAssignments(IResolvable)
//  .privilegeAssignments(java.util.List<SqlPermissionsPrivilegeAssignments>)
//  .table(java.lang.String)
//  .view(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.anonymousFunction">anonymousFunction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#anonymous_function SqlPermissions#anonymous_function}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.anyFile">anyFile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#any_file SqlPermissions#any_file}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.catalog">catalog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#catalog SqlPermissions#catalog}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#cluster_id SqlPermissions#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#database SqlPermissions#database}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#id SqlPermissions#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.privilegeAssignments">privilegeAssignments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>></code> | privilege_assignments block. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.table">table</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#table SqlPermissions#table}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.view">view</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#view SqlPermissions#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `anonymousFunction`<sup>Optional</sup> <a name="anonymousFunction" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.anonymousFunction"></a>

```java
public java.lang.Object getAnonymousFunction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#anonymous_function SqlPermissions#anonymous_function}.

---

##### `anyFile`<sup>Optional</sup> <a name="anyFile" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.anyFile"></a>

```java
public java.lang.Object getAnyFile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#any_file SqlPermissions#any_file}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.catalog"></a>

```java
public java.lang.Object getCatalog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#catalog SqlPermissions#catalog}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#cluster_id SqlPermissions#cluster_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#database SqlPermissions#database}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#id SqlPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilegeAssignments`<sup>Optional</sup> <a name="privilegeAssignments" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.privilegeAssignments"></a>

```java
public java.lang.Object getPrivilegeAssignments();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>>

privilege_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#privilege_assignments SqlPermissions#privilege_assignments}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#table SqlPermissions#table}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.view"></a>

```java
public java.lang.String getView();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#view SqlPermissions#view}.

---

### SqlPermissionsPrivilegeAssignments <a name="SqlPermissionsPrivilegeAssignments" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_permissions.SqlPermissionsPrivilegeAssignments;

SqlPermissionsPrivilegeAssignments.builder()
    .principal(java.lang.String)
    .privileges(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#principal SqlPermissions#principal}. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments.property.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#privileges SqlPermissions#privileges}. |

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#principal SqlPermissions#principal}.

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments.property.privileges"></a>

```java
public java.util.List<java.lang.String> getPrivileges();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_permissions#privileges SqlPermissions#privileges}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlPermissionsPrivilegeAssignmentsList <a name="SqlPermissionsPrivilegeAssignmentsList" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_permissions.SqlPermissionsPrivilegeAssignmentsList;

new SqlPermissionsPrivilegeAssignmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.get"></a>

```java
public SqlPermissionsPrivilegeAssignmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>>

---


### SqlPermissionsPrivilegeAssignmentsOutputReference <a name="SqlPermissionsPrivilegeAssignmentsOutputReference" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_permissions.SqlPermissionsPrivilegeAssignmentsOutputReference;

new SqlPermissionsPrivilegeAssignmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.privilegesInput">privilegesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.privilegesInput"></a>

```java
public java.util.List<java.lang.String> getPrivilegesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.privileges"></a>

```java
public java.util.List<java.lang.String> getPrivileges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments">SqlPermissionsPrivilegeAssignments</a>

---



